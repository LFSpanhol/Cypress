/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('../Values').VALUES;

class FuncaoConta {

    AccessListAcount() {
        cy.visit('/contas')
    }

    EditAccount() {

        cy.document().then(doc => {

            var getEditAccountName = doc.getElementById(vl.variablesDoc.tableName);
            getEditAccountName = getEditAccountName.getElementsByTagName(vl.variablesDoc.tr)[1];
            getEditAccountName = getEditAccountName.getElementsByTagName(vl.variablesDoc.td)[1];
            getEditAccountName = getEditAccountName.getElementsByTagName('a')[0];

            console.log('Log getEdit: ', getEditAccountName);

            cy.visit(getEditAccountName.href);
            cy.get(el.name).clear();
            cy.get(el.name).type(vl.account.alterAccountName);
            cy.get(el.buttonSalve).click();

        })

    }

    RemoveAccount() {

        cy.document().then(doc => {
            var getRemoveAccount = doc.getElementById(vl.variablesDoc.tableName);
            getRemoveAccount = getRemoveAccount.getElementsByTagName(vl.variablesDoc.tr)[1];
            getRemoveAccount = getRemoveAccount.getElementsByTagName(vl.variablesDoc.td)[1];
            getRemoveAccount = getRemoveAccount.getElementsByTagName('a')[1];

            console.log('Log getRemove: ', getRemoveAccount);

            cy.visit(getRemoveAccount.href);
        })
    }

    ValidatedAlterEditInformation() {

        cy.document().then(doc => {

            var title = doc.title;

            expect(title).be.eq(vl.doc.title);
            var editedResultName = doc.getElementById(vl.variablesDoc.tableName);
            editedResultName = editedResultName.getElementsByTagName(vl.variablesDoc.tr)[1];
            editedResultName = editedResultName.getElementsByTagName(vl.variablesDoc.td)[0];
            console.log('Alterado nome conta: ', editedResultName);
            expect(editedResultName).be.have.text(vl.account.alterAccountName);

        })

        cy.get(el.alert).should('be.visible');
        cy.get(el.alert).should('have.text', vl.account.alert.alertSuccessAlter);

    }

    ValidatedRemoveAccount(){
        
        cy.get(el.alert).should('be.visible');
        cy.get(el.alert).should('have.text', vl.account.alert.alertSucessRemoved)
    }
}

export default new FuncaoConta();