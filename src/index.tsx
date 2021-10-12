import App from './components/app';
import ReactDOM from 'react-dom';
import React from 'react';
import './styles.scss';

const rootElementClass = 'chess-com-4vi-root';
const rootElement = document.createElement('div');
rootElement.className = rootElementClass;

let insertElement: Element | null = null;
if (document.URL.includes('/play/online')) {
  insertElement = document.querySelector('.new-game-index-main');  
} else if (document.URL.includes('/play/computer')) {
  insertElement = document.querySelector('.layout-player.layout-bottom-player');
}

if (insertElement) {
  insertElement.appendChild(rootElement);
}

ReactDOM.render(
  <App />,
  document.getElementsByClassName(rootElementClass)[0]
)
