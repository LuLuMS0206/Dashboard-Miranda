import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import { LoginPage } from './pages/LoginPage/LoginPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
        <Routes>
        
            <Route path='' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
