import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../auth/context/AuthContext';
import { useEffect } from 'react';
 

//function PrivateRoutes({isAuthenticated,element}) {
function PrivateRoutes({ children }) {
  /*return (
            (isAuthenticated)
            ? (element)
            : (<Navigate to="/login" />)
    )*/
    const { state } = useContext(AuthContext);
    const valor = useLocation();

    useEffect(() => {
      const lastPath = valor.pathname + valor.search;
      localStorage.setItem("lastPath", lastPath);
    }, [valor.pathname,valor.search]);
    
  return (state.logged) ? children : <Navigate to="/login" />;
}

PrivateRoutes.propTypes = {
    //isAuthenticated: PropTypes.bool.isRequired,
    //element: PropTypes.any.isRequired
    children:PropTypes.any.isRequired
}

export default PrivateRoutes
