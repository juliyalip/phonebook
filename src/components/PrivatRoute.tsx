import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/contextAuth'

interface IProp {
    children: React.ReactNode,
}

const PrivateRoute = ({ children }: IProp) => {
    const { isLoggedIn } = useAuth();
   
    return isLoggedIn ? <>{children}</> : <Navigate to="/login" replace />
}

export default PrivateRoute