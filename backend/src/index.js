const env = require("./env");
const express = require("express");
const app = express();
const routes = express.Router();
const rotas = require("./rotas/importacaoRotas");
const connectionResolver = require("./middlewares/connectionResolver");
const bodyParser = require("body-parser");
const cors = require("cors");
const UsuarioController = require("./controller/cadastro/UsuarioController");
const autenticacao = require("./middlewares/autenticacao");
const busboy = require("connect-busboy");
require("./config/firebase");
const http = require("http");
const socketIo = require("socket.io");
const userSocketIdMap = new Map(); //a map of online usernames and their clients

function addClientToMap(userName, socketId) {
  if (!userSocketIdMap.has(userName)) {
    //when user is joining first time
    userSocketIdMap.set(userName, new Set([socketId]));
  } else {
    //user had already joined from one client and now joining using another
    client;
    userSocketIdMap.get(userName).add(socketId);
  }
}

function removeClientFromMap(userName, socketId) {
  if (userSocketIdMap.has(userName)) {
    let userSocketIdSet = userSocketIdMap.get(userName);
    userSocketIdSet.delete(socketId);
    //if there are no clients for a user, remove that user from online
    list(map);
    if (userSocketIdSet.size == 0) {
      userSocketIdMap.delete(userName);
    }
  }
}

app.use(
  busboy({
    highWaterMark: 2 * 1024 * 1024, // Definir buffer de 2 MiB
  })
);

//libera acesso de qualquer lugar
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//recebe o nome da entidade e armazena as informações do db
app.use(bodyParser.json());
app.use(connectionResolver.resolve);

//rota separada para não precisar usar token
routes.post("/usuario/salvar", UsuarioController.salvar);

app.use(routes);
//autenticação por token
app.use(autenticacao);

//rotas
app.use(rotas);

const server = http.createServer(app);

const io = socketIo(server);

let interval;

io.on("connection", (socket) => {
  console.log("Novo cliente conectado");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  let userName = socket.handshake.query.userName ;
  addClientToMap(userName, socket.id);
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
    clearInterval(interval);
  });
});

io.on("disconnect", () => {
  //remove this client from online list
  removeClientFromMap(userName, socket.id);
});

io.on("chat message", (recipientUserName, messageContent) => {
  //get all clients (socketIds) of recipient
  let recipientSocketIds = userSocketIdMap.get(recipientUserName);
  for (let socketId of recipientSocketIds) {
    io.to(socketId).emit("new message", messageContent);
  }
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

app.listen(process.env.PORT || 3001);
