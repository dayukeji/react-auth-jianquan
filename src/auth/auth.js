import React from 'react'

const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  return <AuthContext.provider
  value={{
    user, singIn,singOut
  }}
  >
    {children}
  </AuthContext.provider>>
};
