/// <reference types="cypress"/>

import CadastroLogin from "../support/Pages/CadastroLogin";
import Login from "../support/Pages/Login";
import CadastroContas from "../support/Pages/CadastroContas";
import FuncaoConta from "../support/Pages/FuncaoConta"


describe('Warren Brasi', () => {

    it.skip('1: Login - Usuário não cadastrado', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        Login.validarLogin_UsuarioNaoCadastrado();
    })

    it.skip('2: Cadastro de Usuário: Com Sucesso', () => {

        CadastroLogin.acessarCadastroLogin();
        CadastroLogin.preencherCadastroLogin();
        CadastroLogin.validarEmail_CadastroRealizadoComSucesso();

    })

    it.skip('3:Cadastro de Usuário: E-mail já cadastrado', () => {

        CadastroLogin.acessarCadastroLogin();
        CadastroLogin.preencherCadastroLogin();
        CadastroLogin.validarEmail_CadastroNãoRealizadoEmailJaCadastrado();

    })

    it.skip('4: Login', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        Login.validarLogin_LoginRealizadoComSucesso();
    })

    it('5: Adicionar Conta', () => {

        Login.LoginSystema();
        Login.preencherLogin();
        CadastroContas.acessarCadastroContas();
        CadastroContas.adicionarConta();
        CadastroContas.validarCadastroConta();
        CadastroContas.acessarCadastroContas();
        CadastroContas.adicionarConta();
        CadastroContas.contaJaCadastrada();

    })

    it('6: Alterar nome da Conta', () => {

        Login.LoginSystema();
        Login.preencherLogin();

        FuncaoConta.acessarConta();
        FuncaoConta.editarConta();
        FuncaoConta.validarEditarConta();

    })

    it('7: Remover conta', () =>{

        Login.LoginSystema();
        Login.preencherLogin();

        FuncaoConta.acessarConta();
        FuncaoConta.removerConta();
        FuncaoConta.validarRemoverConta();
        
    })
})
