import React from 'react'
import ReactDOM from 'react-dom/client'

//react redux
import {Provider} from 'react-redux'
import { store } from './store/index.js'

//componentes
import App from './App.jsx'

//estilos
import './styles/styles.scss'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter> 
    <Provider store={store}> 
      <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>,
)
