import App from './components/app'
import ReactDOM from 'react-dom'

const rootElementClass = 'chess-com-4vi-root'
const rootElement = document.createElement('div')
rootElement.className = rootElementClass

const insertElement = document.querySelector('.new-game-index-main')

insertElement.appendChild(rootElement)

const app = App()
ReactDOM.render(
  app,
  document.getElementsByClassName(rootElementClass)[0]
)
