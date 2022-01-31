/// <reference types="cypress"/>

describe('Desafio 2 - Warren Brasil', () => {

    it('Pesquisa de Pokemon Charmander', () => {

        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/charmander',

        }).then(resposta => {
            expect(resposta.body).is.not.null;
            expect(resposta.status).be.eq(200);
        })

    })

    it('Consulta com Post', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/todos',
            body:{
                "userId": 1,
                "id": 201,
                "title": "Meu teste na API com metodo post",
                "completed": false
            }
        }).then(resposta => {

            console.log('POST: ' , resposta.body)

            expect(resposta.body).is.not.null;
            expect(resposta.status).be.eq(201);
            expect(resposta.body).have.property('userId').be.eq(1);
            expect(resposta.body).have.property('id').be.eq(201);
            expect(resposta.body).have.property('title').be.eq('Meu teste na API com metodo post');
            expect(resposta.body).have.property('completed').be.eq(false);

        })
    })    

    it('Consulta com Get', () => {

        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/todos/2'
        }).then(resposta => {
            
            console.log('GET: ' , resposta.body)

            expect(resposta.body).is.not.null;
            expect(resposta.status).be.eq(200);
            expect(resposta.body).have.property('userId').be.eq(1);
            expect(resposta.body).have.property('id').be.eq(2);
            expect(resposta.body).have.property('title').be.eq('quis ut nam facilis et officia qui');
            expect(resposta.body).have.property('completed').be.eq(false);
            
        })

    })

})