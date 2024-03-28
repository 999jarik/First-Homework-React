import React from 'react'
import ReactDOM from 'react-dom/client'
import FirstComponent from './components/FirstComponent/FirstComponent.jsx'
import SecondComponent from './components/SecondComponent/SecondComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstComponent />
    <SecondComponent />
  </React.StrictMode>,
)
