<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

</body>

</html>

Aqui está um exemplo simples de um código React com testes usando Cypress:

### 1. Criar o projeto React
Primeiro, você precisa criar um novo projeto React. Se você ainda não o fez, pode usar o create-react-app:

bash
npx create-react-app react-cypress-example
cd react-cypress-example


### 2. Criar um Componente Simples
Vamos criar um componente React simples, por exemplo, um botão que muda de texto ao ser clicado.

Crie um arquivo chamado Button.js em src/components/:

jsx
// src/components/Button.js
import React, { useState } from 'react';

const Button = () => {
const [text, setText] = useState('Clique aqui');

const handleClick = () => {
setText('Você clicou!');
};

return <button onClick={handleClick}>{text}</button>;
};

export default Button;


Em seguida, importe esse componente no App.js:

jsx
// src/App.js
import React from 'react';
import Button from './components/Button';

function App() {
return (
<div className="App">
  <h1>Testando Cypress com React</h1>
  <Button />
</div>
);
}

export default App;


### 3. Configurar o Cypress
Para instalar o Cypress no seu projeto, execute:

bash
npm install cypress --save-dev


Após a instalação, abra o Cypress:

bash
npx cypress open


Isso criará uma pasta cypress no seu projeto.

### 4. Escrever um Teste Cypress
Vamos criar um teste simples para verificar se o texto do botão muda quando clicado.

Crie um arquivo de teste em cypress/e2e chamado button.cy.js:

javascript
// cypress/e2e/button.cy.js
describe('Button Component', () => {
it('changes text when clicked', () => {
cy.visit('http://localhost:3000');

cy.contains('Clique aqui').click();

cy.contains('Você clicou!').should('exist');
});
});


### 5. Rodar o Teste
Certifique-se de que o seu servidor de desenvolvimento do React esteja rodando:

bash
npm start


Em seguida, execute os testes Cypress com o comando:

bash
npx cypress open


O Cypress abrirá uma janela, e você pode selecionar o teste button.cy.js para executá-lo.

### Resumo
- Criamos um simples componente React com um botão.
- Instalamos e configuramos o Cypress para testes.
- Escrevemos um teste que verifica se o texto do botão muda ao ser clicado.

Isso fornece uma base para você começar a escrever testes com Cypress em um projeto React.