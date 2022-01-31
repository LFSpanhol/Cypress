/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('.././Values').VALUES;

class CadastraLogin {

    AccessRegistrationLogin() {
        cy.visit('/cadastro');
    }

    FillRegistrationLogin(nomeUser) {

        cy.get(el.name).type(vl.user.username);

        cy.get(el.email).type(vl.user.email.emailNew.replace('@', nomeUser + '@'));

        cy.get(el.password).type(vl.user.password);
        cy.get(el.buttonSalve).click({ force: true });

    }

    FillRegistrationLoginEmailExist() {

        cy.get(el.name).type(vl.user.username);
        cy.get(el.email).type(vl.user.email.emailExist);
        cy.get(el.password).type(vl.user.password);
        cy.get(el.buttonSalve).click({ force: true });

    }

    ValidatedRegistrationLoginSucess() {
        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).have.class('alert alert-success')
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.text('Usuário inserido com sucesso')
            })
        })
    }

    ValidatedRegistrationLoginNotSucess() {
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