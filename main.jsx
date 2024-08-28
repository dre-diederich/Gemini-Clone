import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import './src/styles/index.css'
import ContextProvider from './src/context/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)