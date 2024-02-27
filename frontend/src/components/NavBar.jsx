import { Link } from "react-router-dom"
import { useLogout } from "../hooks/useLogout"

const NavBar = () => {
  const { logout } = useLogout()

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
          <button onClick={handleLogout}>Logout</button>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </div>

    </header>
  )
}

export default NavBar
