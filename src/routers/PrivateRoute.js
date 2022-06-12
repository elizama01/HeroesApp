import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';

// Componente que se encarga de validar si el usuario esta autenticado para rutas privadas
export const PrivateRoute = ({ children }) => {
    const { user } = React.useContext(AuthContext);
    const { pathname, search } = useLocation();


    localStorage.setItem('lastLocation', pathname + search);

    return user.logged ? children : <Navigate to='/login' />;
}
