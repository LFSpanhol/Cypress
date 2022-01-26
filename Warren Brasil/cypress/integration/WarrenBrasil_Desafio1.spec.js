/// <reference types="cypress"/>

import CadastroLogin from "../support/Pages/CadastroLogin";
import Login from "../support/Pages/Login";
import CadastroContas from "../support/Pages/CadastroContas";
import ListarContas from "../support/Pages/ListarContas"
import FuncaoConta from "../support/Pages/FuncaoConta"


describe('Warren Brasi', () => {

    it('1: Login - Usuário não cadastrado', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        Login.validarLogin_UsuarioNaoCadastrado();
    })

    it('2: Cadastro de Usuário: Com Sucesso', () => {

        CadastroLogin.acessarCadastroLogin();
        CadastroLogin.preencherCadastroLogin();
        CadastroLogin.validarEmail_CadastroRealizadoComSucesso();

    })

    it('3:Cadastro de Usuário: E-mail já cadastrado', () => {

        CadastroLogin.acessarCadastroLogin();
        CadastroLogin.preencherCadastroLogin();
        CadastroLogin.validarEmail_CadastroNãoRealizadoEmailJaCadastrado();

    })

    it('4: Login', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        Login.validarLogin_LoginRealizadoComSucesso();
    })

    it('5: Conta', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        CadastroContas.acessarCadastroContas();
        CadastroContas.adicionarConta();
        CadastroContas.validarCadastroConta();
        CadastroContas.acessarCadastroContas();
        CadastroContas.adicionarConta();
        CadastroContas.contaJaCadastrada();

    })

    it('6: Listar, Editar e Excluir Conta', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        ListarContas.acessarListaConta();
        ListarContas.acessarListagemConta();
        FuncaoConta.editar();
        FuncaoConta.excluir();

    })
})
