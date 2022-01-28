/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('.././Values').VALUES;

class CadastroConta {

    AccessAddAccount() {

        cy.visit('/addConta');

    }

    addNewAccount() {

        cy.get(el.account).click({ force: true })
        cy.get(el.name).type(vl.account.accountName);
        cy.get(el.buttonSalve).click({ force: true });

    }

    ValidatedRegistrationAccountSucess() {

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-success')
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.text('Conta adicionada com sucesso!')
            })
        })
    }

    ValidateAccountAlreadyRegistered() {

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