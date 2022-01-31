/// <reference types="cypress"/>

import CadastroLogin from "../../support/PagesSeuBarriga/CadastroLogin";
import Login from "../../support/PagesSeuBarriga/Login";
import CadastroContas from "../../support/PagesSeuBarriga/CadastroContas";
import FuncaoConta from "../../support/PagesSeuBarriga/FuncaoConta";
import Movimentacao from "../../support/PagesSeuBarriga/Movimentacao";
import ResumoMensal from "../../support/PagesSeuBarriga/ResumoMensal";
import Logoff from "../../support/PagesSeuBarriga/Logoff";

describe('Desafio 1 - Warren Brasil', () => {

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

    it('Step Test 3: Registration login with sucess', () => {

        var nomeUser = 'lfspanhol6';

        CadastroLogin.AccessRegistrationLogin();
        CadastroLogin.FillRegistrationLogin(nomeUser);
        CadastroLogin.ValidatedRegistrationLoginSucess();

    });

    it('Step Test 4: Access login with sucesss', () => {

        Login.SystemLogin();
        Login.FillLogin();
        Login.ValidateLoginSucess();

    });

    it('Step Test 5: Add new account', () => {
        
        var accountName = 'Serviços de streaming' 

        Login.SystemLogin();
        Login.FillLogin();

        CadastroContas.AccessAddAccount();
        CadastroContas.addNewAccount(accountName);
        CadastroContas.ValidatedRegistrationAccountSucess();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();

        Logoff.SystemLogoff();

    });

    it('Step Test 6: Validate Account Already Registered', () => {

        var accountName = 'Conta de Agua' 

        Login.SystemLogin();
        Login.FillLogin();       

        CadastroContas.AccessAddAccount(); 
        CadastroContas.addNewAccount(accountName);
        CadastroContas.AccessAddAccount(); 
        CadastroContas.addNewAccount(accountName);
        CadastroContas.ValidateAccountAlreadyRegistered();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();

        Logoff.SystemLogoff();

    });

    it('Step Test 7: Change account name.', () => {

        var accountName = 'Conta de Luz' 

        Login.SystemLogin();
        Login.FillLogin();

        CadastroContas.AccessAddAccount();   
        CadastroContas.addNewAccount(accountName);

        FuncaoConta.AccessListAcount();
        FuncaoConta.EditAccount();
        FuncaoConta.ValidatedAlterEditInformation();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();

        Logoff.SystemLogoff();

    });

    it('Step Test 8: Remove registration account', () => {

        var accountName = 'Conta de Telefone' 

        Login.SystemLogin();
        Login.FillLogin();

        CadastroContas.AccessAddAccount();
        CadastroContas.addNewAccount(accountName);

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();
        FuncaoConta.ValidatedRemoveAccount();

        Logoff.SystemLogoff();

    });

    it('Step Test 9: Registration monthly movement', () => {
        
        var accountName = 'Conta de Gas'
        var accountName2 = 'Conta de Limpeza Casa'

        Login.SystemLogin();
        Login.FillLogin();

        CadastroContas.AccessAddAccount();
        CadastroContas.addNewAccount(accountName);
        CadastroContas.AccessAddAccount();
        CadastroContas.addNewAccount(accountName2);

        Movimentacao.AccessMovement();
        Movimentacao.FillMovementPaidOut(accountName2);
        Movimentacao.ValidateMovement();

        Movimentacao.AccessMovement();
        Movimentacao.FillMovementPending(accountName);
        Movimentacao.ValidateMovement();

        ResumoMensal.AccessMonthlySummary();
        ResumoMensal.RemovedMonthlySummary();
        ResumoMensal.AccessMonthlySummary();
        ResumoMensal.RemovedMonthlySummary();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();
        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();

        Logoff.SystemLogoff();
        
    })

    it('Step Test 10: View report monthly summary', () => {

        Login.SystemLogin();
        Login.FillLogin();

        var accountName = 'Cartão de crédito'

        CadastroContas.AccessAddAccount();
        CadastroContas.addNewAccount(accountName);

        Movimentacao.AccessMovement();
        Movimentacao.FillMovementPaidOut(accountName);

        ResumoMensal.AccessMonthlySummary();
        ResumoMensal.RemovedMonthlySummary();

        FuncaoConta.AccessListAcount();
        FuncaoConta.RemoveAccount();

        Logoff.SystemLogoff();

    })
})
