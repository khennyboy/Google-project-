import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ContextProvider from './contexts/contextProvider'


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  // <React.StrictMode>
    <ContextProvider/>
  // </React.StrictMode>
)