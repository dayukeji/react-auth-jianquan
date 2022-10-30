import React, { useState } from 'react';

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signIn = () => {};
  const signOut = () => {};
  return (
    <AuthContext.provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { useAuth };

export default AuthProvider;
