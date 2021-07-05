import App from './components/app';
import ReactDOM from 'react-dom';
import React from 'react';

const rootElementClass = 'chess-com-4vi-root';
const rootElement = document.createElement('div');
rootElement.className = rootElementClass;

const insertElement = document.querySelector('.new-game-index-main');

if (insertElement) {
  insertElement.appendChild(rootElement);
}

ReactDOM.render(
  <App />,
  document.getElementsByClassName(rootElementClass)[0]
)
