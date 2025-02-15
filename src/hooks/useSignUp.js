import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignUp = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()

  const SignUp = async (email, password) => {
    setIsLoading(true)
    setError(null)

    /*

    async function signUpUser(email, password) {
  try {
    const response = await fetch('https://your-api-domain.com/api/user/SignUp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing up:', error);
    return { success: false, message: error.message };
  }
}

// Usage example:
signUpUser('test@example.com', 'securePassword123')
  .then(data => console.log(data))
  .catch(err => console.error(err));

    */

    const response = await fetch('/api/user/SignUp', {

      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)
      console.log(json);
    }
  }

  return { SignUp, isLoading, error }
}