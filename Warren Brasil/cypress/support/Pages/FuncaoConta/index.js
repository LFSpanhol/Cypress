/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('../Values').VALUES;

class FuncaoConta {

    editar() {

        cy.get(el.editarConta).click({ force: true });
        cy.get(el.nome).clear();
        cy.get(el.nome).type(vl.novoNomeConta);

    }

    excluir(){

    }
}

export default new FuncaoConta();