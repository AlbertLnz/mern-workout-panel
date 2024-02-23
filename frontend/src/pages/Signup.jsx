import { useState } from "react";
import useAuthContext from '../hooks/useAuthContext.js'

const Signup = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // console.log(email, password)

    const signup = async (email, password) => {
      setIsLoading(true)
      setError(null)

      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      const json = await response.json()

      if(!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }

      if(response.ok) {
        localStorage.setItem('user', JSON.stringify(json.user)) // save the user to local storage
        dispatch({ type: 'SIGNUP', payload: json.user }) // update the userContext

        setIsLoading(false)
      }
    }

    await signup(email, password)


  }

  return (
    <form className="signup" onSubmit={handleSubmit}>

      <h3>Sign up</h3>

      <label>Email:</label>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

      <label>Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />

      <button disabled={isLoading}>Signup</button>

      {error &&
        <div className="error">
          { error }
        </div>
      }

    </form>
  )
}

export default Signup
