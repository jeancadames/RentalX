import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RentaIX } from './RentaIX'
import { BrowserRouter } from 'react-router-dom'
import { RentalXApp } from './RentalXApp'
import { Navbar } from './components'

  ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <React.StrictMode>
        <RentalXApp />
      </React.StrictMode>
    </BrowserRouter>
)
