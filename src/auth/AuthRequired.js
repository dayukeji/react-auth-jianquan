import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from './auth';

const AuthRequired = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  console.log('AuthRequired auth.user', auth.user);
  if (!auth.user) {
    return (
      <Navigate to={'/Login'} replace state={{ form: location }}></Navigate>
    );
  }
  return children;
};

export default AuthRequired;
