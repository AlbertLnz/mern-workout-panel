import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { WorkoutsContextProvider } from './context/WorkoutContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <div className='App'>
        <BrowserRouter>
          <NavBar />
          <div className='pages'>
            <Routes>
              <Route path="/" element={ <App /> }/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </WorkoutsContextProvider>
  </React.StrictMode>,
)
