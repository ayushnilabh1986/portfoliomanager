import { createContext, useReducer } from 'react'

export var AuthContext = createContext()

export var authReducer = (state, action) => {
  console.log('---',action.type)
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
      return { user: null }
    default:
      
      return state
  }
}

export var AuthContextProvider = ({ children }) => {
  var [state, dispatch] = useReducer(authReducer, { 
    user: null
  })

  console.log('AuthContext state:', state)
  console.log('---',state.user)
      if(!state.user) {
        //console.log("LOCALSTORAGE=" +localStorage.getItem('user'));
        state.user=localStorage.getItem('user');
       // console.log("CONTEXT= " +context)
        //throw Error('useAuthContext must be used inside an AuthContextProvider')
      }
      console.log(state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      { children }
    </AuthContext.Provider>
  )

}