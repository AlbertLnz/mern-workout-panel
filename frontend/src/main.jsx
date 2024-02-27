import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import { WorkoutsContextProvider } from './context/WorkoutContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkoutsContextProvider>
        <div className='App'>
          <BrowserRouter>
            <NavBar />
            <div className='pages'>
              <Routes>
                <Route path="/" element={ <App /> }/>
                <Route path="/signup" element={ <Signup /> }/>
                <Route path="/login" element={ <Login /> }/>
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </WorkoutsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
