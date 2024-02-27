import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './pages/App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NavBar from './components/NavBar'
import useAuthContext from './hooks/useAuthContext'

function AppRoot() {

  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <App /> : <Navigate to='/login' />}
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to='/' />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default AppRoot;