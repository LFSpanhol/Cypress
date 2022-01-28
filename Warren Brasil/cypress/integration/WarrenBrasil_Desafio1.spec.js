/// <reference types="cypress"/>

import CadastroLogin from "../support/Pages/CadastroLogin";
import Login from "../support/Pages/Login";
import CadastroContas from "../support/Pages/CadastroContas";
import FuncaoConta from "../support/Pages/FuncaoConta"


describe('Warren Brasi', () => {

    it('Step Test 1: user not exist login', () => {

        Login.SystemLogin();
        Login.FillLoginEmailNotExist();
        Login.ValidateLoginNotSucess();

    });

    it('Step Test 2: The email is already registered', () => {

        CadastroLogin.AccessRegistrationLogin();
        CadastroLogin.FillRegistrationLoginEmailExist();
        CadastroLogin.ValidatedRegistrationLoginNotSucess();

    });

    it.skip('Step Test 3: Registration login with sucess', () => {

        CadastroLogin.AccessRegistrationLogin();
        CadastroLogin.FillRegistrationLogin();
        CadastroLogin.ValidatedRegistrationLoginSucess();

    });

    it('Step Test 4: Access login with sucesss', () => {

        Login.SystemLogin();
        Login.FillLogin();
        Login.ValidateLoginSucess();

    });

    it('Step Test 5: Add new account', () => {

        Login.SystemLogin();
        Login.FillLogin();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();

        CadastroContas.AccessAddAccount();
        CadastroContas.addNewAccount();
        CadastroContas.ValidatedRegistrationAccountSucess();

    });

    it('Step Test 6: Validate Account Already Registered', () => {

        Login.SystemLogin();
        Login.FillLogin();       

        CadastroContas.AccessAddAccount();   
        CadastroContas.addNewAccount();
        CadastroContas.ValidateAccountAlreadyRegistered();

    });

    it('Step Test 7: Change account name.', () => {

        Login.SystemLogin();
        Login.FillLogin();

        FuncaoConta.AccessListAcount();
        FuncaoConta.EditAccount();
        FuncaoConta.ValidatedAlterEditInformation();

    });

    it('Step Test 7: Remove registration account', () => {

        Login.SystemLogin();
        Login.FillLogin();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();
        FuncaoConta.ValidatedRemoveAccount();

    });

    it('Step Test 8: Registration monthly movement', () => {
        
        Login.SystemLogin();
        Login.FillLogin();

        //Criar Class para acessar
        //Criar Class para cadastrar
        //Criar Class para validar
    })
})
