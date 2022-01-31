/// <reference types="cypress"/>

class ResumoMensal {

    AccessMonthlySummary() {

        cy.visit('/extrato');
    }

    RemovedMonthlySummary() {

        cy.document().then(doc => {
            var getMonthlySummary = doc.getElementById('tabelaExtrato');
            console.log('Resummo1' , getMonthlySummary)
                //getMonthlySummary = getMonthlySummary.getElementsByTagName('tbody')[0];
                //console.log('Resummo2' , getMonthlySummary)
                getMonthlySummary = getMonthlySummary.getElementsByTagName('tr')[1];
                console.log('Resummo3' , getMonthlySummary)
                getMonthlySummary = getMonthlySummary.getElementsByTagName('td')[5];
                console.log('Resummo4' , getMonthlySummary)
                getMonthlySummary = getMonthlySummary.getElementsByTagName('a')[0];
            
            cy.visit(getMonthlySummary.href);

        })
    }

    ValidatedRemoveMonthluSummary(){

        cy.wait(500).then(() => {
            cy.get('.alert').should((response) => {
                expect(response).is.not.null
                expect(response).not.have.class('alert alert-danger')
                expect(response).have.class('alert alert-success')
                expect(response).have.text('Movimentação removida com sucesso!')
            })
        })

    }

}

export default new ResumoMensal();