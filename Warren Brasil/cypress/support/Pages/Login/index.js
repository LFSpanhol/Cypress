/// <reference types="cypress"/>

const el = require('./elements').ELEMENTS;
const vl = require('.././Values').VALUES;

class Login {

    SystemLogin() {
        cy.visit('/Login')
    }

    FillLogin() {

        cy.get(el.email).type(vl.user.email.emailExist);
        cy.get(el.password).type(vl.user.password);
        cy.get(el.buttonSingUp).click({ force: true });

    }

    FillLoginEmailNotExist() {
        cy.get(el.email).type(vl.user.email.emailNotExist);
        cy.get(el.password).type(vl.user.password);
        cy.get(el.buttonSingUp).click({ force: true });
    }

    ValidateLoginSucess() {

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.class('alert alert-success')
            })

            cy.document().then(doc => {
                var welcome = doc.getElementsByClassName('body-index')[0];
                    welcome = welcome.getElementsByClassName('alert alert-success')[0].innerHTML;
                console.log(welcome)
                const comp = 'Bem vindo, ' + vl.user.username + '!';
                console.log(comp)
                expect(welcome).be.eq(comp)

            })

            cy.get('.footer > span').should((response) => {
                expect(response).is.not.null
                expect(response).have.text('Seu Barriga. Nunca mais esqueça de pagar o aluguel.reset')

            })
        })
    }

    ValidateLoginNotSucess() {

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