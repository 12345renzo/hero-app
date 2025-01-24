import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import authReducer from './authReducer'
import PropTypes from "prop-types";
import types from '../types/types';

const inicial = {
    logged:false
}

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user:user,
  }
}

function AuthProvider({children}) {
  
    const [state, dispatch] = useReducer(authReducer, inicial,init);

    const login = (name = '') => {

        const user = {id: 'ABC',name}

        const accion = {
            type: types.login,
            payload: user
        }
        
        localStorage.setItem('user',JSON.stringify(user));

        dispatch(accion);
    }

    const logout = () => {
      localStorage.removeItem('user');
      const accion = {
        type: types.logout,
      }
      dispatch(accion)
    }
  
  return (
    <AuthContext.Provider value={{state,login,logout}}>
        {children}
    </AuthContext.Provider>
  )
}
AuthProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export default AuthProvider