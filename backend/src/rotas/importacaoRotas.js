const express = require("express");
const routes = express.Router();
const UsuarioRoute = require("./cadastro/UsuarioRoute");
const EntidadeController = require("../controller/EntidadeController");
const IndexController = require("../controller/IndexController");
const MenuController = require("../controller/MenuController");
const UsuarioController = require("../controller/cadastro/UsuarioController");
const EmailRoute = require("./EmailRoute");
const urlBackEnd = "/backend";

routes.get(urlBackEnd + "/index", IndexController.index);
routes.post(urlBackEnd + "/entidade/salvar", EntidadeController.salvar);
routes.post(urlBackEnd + "/entidade/lista", EntidadeController.lista);
routes.post(urlBackEnd + "/entidade/visualiza", EntidadeController.visualiza);
routes.post(urlBackEnd + "/entidade/alterar", EntidadeController.alterar);

routes.post(urlBackEnd + "/menu/lista", MenuController.lista);
routes.post(
  urlBackEnd + "/usuario/autenticacao",
  UsuarioController.autenticacao
);

routes.use(EmailRoute);
routes.use(UsuarioRoute);



module.exports = routes;
