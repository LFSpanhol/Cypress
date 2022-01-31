/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;

class Logoff {

    SystemLogoff() {

        cy.get(el.logoff).click();

    }
}

export default new Logoff();