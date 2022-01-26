/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('.././Values').VALUES;

class CadastroConta {

    acessarCadastroContas() {

        cy.visit('/addConta');

    }

    adicionarConta() {

        cy.get(el.contas).click({ force: true })
        cy.get(el.nome).type(vl.nomeConta);
        cy.get(el.buttonCadastrar).click({ force: true });

    }

    validarCadastroConta() {

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-success')
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.text('Conta adicionada com sucesso!')
            })
        })
    }

    contaJaCadastrada() {

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-danger')
                expect(response).not.have.class('alert alert-success')
                expect(response).have.text('Já existe uma conta com esse nome!')
            })
        })

    }

}

export default new CadastroConta();