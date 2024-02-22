import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className='pages'>
        <Routes>
          <Route path="/" element={ <App /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
