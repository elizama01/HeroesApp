import React, { useEffect } from 'react'
import { useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {
  // el reducer es una funcion que recibe dos parametros, el estado y el action
  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    if (!user) return;

    localStorage.setItem('user', JSON.stringify(user));
  
  }, [user])
  
  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}
