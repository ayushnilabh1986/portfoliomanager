import { useAuthContext } from './useAuthContext'
import { useWorkoutsContext } from './useWorkoutsContext'
import { useNavigate } from 'react-router-dom'

import React, { createContext, useContext } from 'react';
import { createRoot } from 'react-dom';



export const useLogout = () => {
  const { dispatch } = useAuthContext()
  const { dispatch: dispatchWorkouts } = useWorkoutsContext()
  const logout = () => {
    // remove user from storage
    localStorage.removeItem('user')

    // dispatch logout action
    dispatch({ type: 'LOGOUT' })

   // navigate("/Login")
    window.location.href = '/';

     dispatchWorkouts({ type: 'SET_WORKOUTS', payload: null })
  }

  return { logout }
}