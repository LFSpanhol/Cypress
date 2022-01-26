/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('../Values').VALUES;

class ListarContas {

    acessarListaConta() {

        cy.visit('/contas');

    }

    acessarListagemConta() {

        cy.get(el.listar).click({ force: true });

    }
}

export default new ListarContas();