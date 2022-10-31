import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './auth';

const AuthRequired = ({ children, requiredAuth }) => {
  const auth = useAuth();
  const location = useLocation();
  console.log('AuthRequired auth.user', auth.user);

  if (!auth.user.userName) {
    return (
      <Navigate to={'/Login'} replace state={{ form: location }}></Navigate>
    );
  }
  console.log('auth.user.role', auth.user.role);
  console.log('requiredAuth', requiredAuth);
  console.log(
    'auth.user.role === requiredAuth',
    auth.user.role === requiredAuth
  );
  if (auth.user.role === 'admin' || auth.user.role === requiredAuth) {
    return children;
  } else {
    return (
      <Navigate to={'/Noauth'} replace state={{ form: location }}></Navigate>
    );
  }
};

export default AuthRequired;
