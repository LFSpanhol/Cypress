/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('.././Values').VALUES;

class Login{

    LoginSystema(){
        cy.visit('/Login')
    }

    preencherLogin(){

        cy.get(el.email).type(vl.email);
        cy.get(el.senha).type(vl.senha);
        cy.get('.btn').click({force: true});

    }

    validarLogin_LoginRealizadoComSucesso(){

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.class('alert alert-success')
                expect(response).contain(vl.nome)
            })
            cy.get('.footer > span').should((response) => {
                expect(response).is.not.null
                expect(response).have.text('Seu Barriga. Nunca mais esqueça de pagar o aluguel.reset')
                
            })
        })
    }

    validarLogin_UsuarioNaoCadastrado(){

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-danger')
                expect(response).not.have.class('alert alert-success')
                expect(response).have.text('Problemas com o login do usuário')
            })
        })
    }

}

export default new Login();