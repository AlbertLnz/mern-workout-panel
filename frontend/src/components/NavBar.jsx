import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>

      <div className="container">
        <Link to="/">
          <h1>Workout body</h1>
        </Link>
        <nav>
          <Link to='/signup'>Signup</Link>
        </nav>
      </div>

    </header>
  )
}

export default NavBar
