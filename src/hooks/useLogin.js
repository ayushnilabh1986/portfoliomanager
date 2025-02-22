import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { useNavigate } from "react-router-dom"






export var useLogin = () => {
  var [error, setError] = useState(null)
  var [isLoading, setIsLoading] = useState(null)
  var  {dispatch}  = useAuthContext()
  var navigate = useNavigate()

  var login = async (email, password) => {
    setIsLoading(true)
    setError(null)

    var response = await fetch('/api/user/Login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    })
    var json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
      console.log(json);

    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json))
      console.log(localStorage.user)

      // update the auth context
      dispatch({type: 'LOGIN', payload: json})

      // update loading state
      setIsLoading(false)




    }
    





  }
        return { login, isLoading, error }

    
  }