# Cypress

Necessário ter instalado o JDK 8 ou superior.

O projeto utiliza a versão do Cypress 8.1.2:

1. Verificar a versão do Cypress:
    - `npm cypress --version`

2. Comando utilizado para atualizar a versão do Cypress, caso necessário:
    - `npm install cypress@8.1.2`

3. Comandos para execução do projeto:
    3.1. Comando utlizado para abrir o Cypress
    - `npm run cypress:open`

    3.2. Habilitando o relatório do Allure:
    - Caso queira pode ser rodado os testes pelo Allure, assim, apresentando o relatório de teste.
    - Para rodar o relatório é nessario habilitar algumas policitas do PowerShell, apenas se quando rodado os comandos do passo 3.2.1 gere erro em sua execução.
        - `Get-ExecutionPolicy -List`
            *** Se a CurrentUser e Process estiverem com o status de Undefined, deve ser rodado os comandos abaixo:
            - `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process`
            - `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

    3.2.1: Rodando o cypress com relatório allure:
    - `npm run allure:clear`
      *** informar s ou y para excluir a pasta
    - `npm run cypress:runallure`
    - `npm run allure:generate`
    - `npm run allure:open`

# Desafio 1

## Sobre os testes

Criei os testes com o inuito de não haver a necessidade do QA intervir neles quando executado. Porém no cadastro de um novo usuário no campo e-mail 'Step test 3', é necessario que seja informado o nome do e-mail, as demais informações do dominio é preenchido automaticamente.

## Estrutura dos testes

Os testes estão divididos por Pages e dentro de cada pagina existe o arquivo de elemento e index.

1. No arquivo elemento vamos encontrar as informações relacionadasa pagina. Organizo o elemento por cada pagina acessada, assim, ficando facil a sua manutenção futura. Quando utilizado o comando `cy.get()` no get é informado a variavel que foi definida no elemento, assim, o codigo fica mais limpo e facil de compreender.

2. O index da pagina, eu utilizo para criar as class e configurar as ações de cada pagina que acho. No index será possivél visualiar o acesso, preenchimento e teste da pagina.

Com a estrutura de index e elemento, tendo organizar o código para que seja facil o acesso e interpertação do mesmo.

Vale resaltar que existe varias maneiras de se organizar o código e uma que achei facil até o momento é utilizando esta herarquia, caso tenham uma sugetão melhor fico a disposição para estudar a ideia ^^.