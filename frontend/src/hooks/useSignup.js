import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useSignup = () => {

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext()


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
      const { email } = json.user
      const token = json.token

      localStorage.setItem('user', JSON.stringify({ email, token })) // save the user to local storage
      dispatch({ type: 'SIGNUP', payload: { email, token } }) // update the userContext
  
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
  
}