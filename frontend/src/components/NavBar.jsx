import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"
import useAuthContext from "../hooks/useAuthContext"

const NavBar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleLogout = () => {
    logout()
  }

  return (
    <header>

      <div className="container">
        <Link to="/">
          <h1>Workout body</h1>
        </Link>
        <nav>
          { user && (
            <div>
              <span>{ user.email }</span>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) }
          { !user && (
            <div>
              <Link to='/signup'>Signup</Link>
              <Link to='/login'>Login</Link>
            </div>
          ) }
        </nav>
      </div>

    </header>
  )
}

export default NavBar
