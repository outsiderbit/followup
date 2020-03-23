# Follow up

Esse é um exemplo de gráfico de investimento. O objetivo desse gráfico é mostrar a progressão monetária de um usuário dentro de um período baseado em uma coleção de dados.

##  Stack Principal

+ [create-react-app](https://github.com/facebook/create-react-app)
+ [highcharts-react](https://github.com/highcharts/highcharts-react)
+ [storybook](https://github.com/storybookjs/storybook)
+ [lodash](https://github.com/lodash/lodash)
+ [moment](https://github.com/moment/moment)

## Sobre a organização do código

Esse projeto usa [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) como modelo para organizar os componentes. Existe outra camada utilitária para formatação, normalização e tokens (design tokens).

## Design de Código

Para normalizar o desenvolvimento dentro de uma equipe, esse projeto opta por usar regras de lint baseado no [eslint do Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), com alguns ajustes nas regras para flexibilizar o uso para as necessidades de desenvolvimento desse projeto. Essas regras são aplicadas além de local, a cada commit e push através do hook para git [husky](https://github.com/typicode/husky)

## Pré-Requisitos

Certifique-se que você tem o **npm 6.13.4** e o  **node 12.16.1 LTS** ou versões superiores.

## Executando a aplicação

1. Clone esse repositório: ``https://github.com/outsiderbit/followup.git``
2. Após clonar o projeto, execute um **npm install** para que possa ser instalado todas as dependências.
3. Com tudo instalado, basta executar **npm start**

## Executando  o Storybook

1. Com tudo instalado, basta executar **npm run storybook**

## Executando os testes unitários

1. Com tudo instalado, basta executar **npm run test**

## Guidelines de commit

Esse projeto usa [commitlint](https://github.com/conventional-changelog/commitlint) para normalizar os commits baseado em um guideline padrão de mensagens. [Git Commit Msg do Karma](http://karma-runner.github.io/4.0/dev/git-commit-msg.html) é o padrão utilizado. Esse lint verifica a cada commit se o contribuidor está escrevendo as mensagens no padrão.