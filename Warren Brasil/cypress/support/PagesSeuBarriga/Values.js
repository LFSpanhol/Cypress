/// <reference types="cypress"/>

export const VALUES = {
    user: {

        username: 'LFSpanhol',
        password: '123@!@#$%abc',

        email: {
            emailNew:'@warrenbrasil.com',
            emailNotExist: 'emailnaocadastrado@test.com',
            emailExist: 'lfspanhol@warrenbrasil.com'
        }

    },
    account: {
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
    },
    movement:{
        descricacaoDespesa: 'Pagamento já realizado',
        interessadoDespesa: 'Kiko',
        descricaoReceita: 'Pagamento pendente',
        interessadoReceita: 'Chiquinha',
        valor: '1500'
    }
}