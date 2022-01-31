/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('../Values').VALUES;

class Movimentacao{

    AccessMovement(){

        cy.visit('/movimentacao');

    }

    FillMovementPaidOut(accountName){

        const dateNow = new Date().toLocaleDateString();

        cy.get(el.tipo).select('Despesa');
        cy.get(el.dataTransacao).type(dateNow);
        cy.get(el.dataPagamento).type(dateNow);
        cy.get(el.descricao).type(vl.movement.descricacaoDespesa);
        cy.get(el.interessado).type(vl.movement.interessadoDespesa);
        cy.get(el.valor).type(vl.movement.valor);
        cy.get(el.contaCadastrada).select(accountName);
        cy.get(el.statusPago).click();
        cy.get(el.buttonSalve).click();

    }

    FillMovementPending(accountName){

        const dateNow = new Date().toLocaleDateString();

        cy.get(el.tipo).select('Receita');
        cy.get(el.dataTransacao).type(dateNow);
        cy.get(el.dataPagamento).type(dateNow);
        cy.get(el.descricao).type(vl.movement.descricaoReceita);
        cy.get(el.interessado).type(vl.movement.descricaoReceita);
        cy.get(el.valor).type(vl.movement.valor);
        cy.get(el.contaCadastrada).select(accountName);
        cy.get(el.statusPendente).click();
        cy.get(el.buttonSalve).click();

    }

    ValidateMovement(){

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.class('alert alert-success')
                expect(response).have.text('Movimentação adicionada com sucesso!')
            })
        })

    }

}


export default new Movimentacao();