/// <reference types="cypress"/>

export const VALUES = {
    user: {

        username: 'LFSpanhol',
        password: '123@!@#$%abc',

        email: {
            emailNew:'lfspanhol1@warrenbrasil.com',
            emailNotExist: 'emailnaocadastrado@test.com',
            emailExist: 'lfspanhol@warrenbrasil.com'
        }

    },
    account: {
        accountName: 'Conta de energia',
        alterAccountName: 'Conta de energia eletrica',
        alert: {
            alertSuccessAlter: 'Conta alterada com sucesso!',
            alertSucessRemoved: 'Conta removida com sucesso!'
        }
    },
    doc: {
        title: 'Seu Barriga - Contas'
    },
    variablesDoc: {
        tableName: 'tabelaContas',
        td: 'td',
        tr: 'tr'
    }
}