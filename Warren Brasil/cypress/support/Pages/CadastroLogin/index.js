/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('.././Values').VALUES;

class CadastraLogin {

    acessarCadastroLogin() {
        cy.visit('/cadastro');
    }

    preencherCadastroLogin() {
        cy.get(el.nome).type(vl.nome);
        cy.get(el.email).type(vl.email);
        cy.get(el.senha).type(vl.senha);

        cy.get(el.buttonCadastrar).click({ force: true })
    }

    validarEmail_CadastroRealizadoComSucesso() {
        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-success')
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.text('Usuário inserido com sucesso')
            })
        })
    }

    validarEmail_CadastroNãoRealizadoEmailJaCadastrado() {
        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-danger')
                expect(response).not.have.class('alert alert-success')
                expect(response).have.text('Endereço de email já utilizado')
            })
        })
    }

}

export default new CadastraLogin();