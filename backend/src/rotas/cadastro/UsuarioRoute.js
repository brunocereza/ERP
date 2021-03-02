const express = require("express");
const routes = express.Router();
const UsuarioController = require("../../controller/cadastro/UsuarioController");

const urlBackEnd = "/backend";

routes.post(urlBackEnd + "/usuario/salvar", UsuarioController.salvar);
routes.post(urlBackEnd + "/usuario/excluir", UsuarioController.excluir);
routes.post(urlBackEnd + "/usuario/lista", UsuarioController.lista);
routes.post(urlBackEnd + "/usuario/visualiza", UsuarioController.visualiza);
routes.put(urlBackEnd + "/usuario/alterar", UsuarioController.alterar);
routes.post(urlBackEnd + "/usuario/matricula", UsuarioController.matricula);
routes.post(urlBackEnd + "/usuario/pesquisa", UsuarioController.pesquisa);
routes.post(
  urlBackEnd + "/usuario/pesquisaTitulares",
  UsuarioController.pesquisaTitulares
);
routes.post(
  urlBackEnd + "/usuario/usuarioPagamMensalidade",
  UsuarioController.usuarioPagamMensalidade
);
routes.post(urlBackEnd + "/usuario/cobranca", UsuarioController.cobranca);
routes.post(
  urlBackEnd + "/usuario/alteraPessoa",
  UsuarioController.alteraPessoa
);
routes.post(
  urlBackEnd + "/usuario/usuarioLogado",
  UsuarioController.usuarioLogado
);
routes.post(
  urlBackEnd + "/usuario/porPessoa",
  UsuarioController.usuarioPorPessoa
);
routes.post(
  urlBackEnd + "/usuario/porPessoaCarteirinha",
  UsuarioController.usuarioPorPessoaCarteirinha
);
routes.put(
  urlBackEnd + "/usuario/alterarMeusDados",
  UsuarioController.alterarMeusDados
);
routes.post(
  urlBackEnd + "/usuario/tipoUsuarioPorPessoa",
  UsuarioController.tipoUsuarioPorPessoa
);
routes.post(
  urlBackEnd + "/usuario/buscaPorTipoUsuario",
  UsuarioController.buscaPorTipoUsuario
);

routes.post(
  urlBackEnd + "/usuario/usuariosPorPessoa",
  UsuarioController.usuariosPorPessoa
);

routes.post(
  urlBackEnd + "/usuario/usuariosPorPessoaETipo",
  UsuarioController.usuariosPorPessoaETipo
);

routes.post(
  urlBackEnd + "/usuario/autenticacaoAdministrador",
  UsuarioController.autenticacaoAdministrador
);

routes.post(
  urlBackEnd + "/usuario/usuarioPorLogin",
  UsuarioController.usuarioPorLogin
);

routes.post(
  urlBackEnd + "/usuario/buscaPorTipoUsuario2",
  UsuarioController.buscaPorTipoUsuario2
);

routes.post(
  urlBackEnd + "/usuario/usuariosCaixaSemConta",
  UsuarioController.usuariosCaixaSemConta
);

routes.post(
  urlBackEnd + "/usuario/usuarioPorContaBancaria",
  UsuarioController.usuarioPorContaBancaria
);

routes.post(
  urlBackEnd + "/usuario/ajustaLigacaoOneToOneUsuarioConta",
  UsuarioController.ajustaLigacaoOneToOneUsuarioConta
);

module.exports = routes;
