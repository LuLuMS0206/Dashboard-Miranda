import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { NavbarComponent } from './components/navbarComponent/navbarComponent'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='' element={<NavbarComponent />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
