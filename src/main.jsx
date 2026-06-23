import React from 'react'
import ReactDOM from 'react-dom/client'
import emailjs from '@emailjs/browser'
import App from './App.jsx'
import './index.css'
import { emailjsConfig } from './config/emailjs'

if (emailjsConfig.publicKey) {
  emailjs.init({ publicKey: emailjsConfig.publicKey })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
