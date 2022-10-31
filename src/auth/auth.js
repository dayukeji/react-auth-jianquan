import React, { useState } from 'react';

const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const signIn = (user, cb) => {
    setUser(user);
    setTimeout(cb, 1000);
  };
  const signOut = (user, cb) => {
    setUser(null);
    setTimeout(cb, 1000);
  };
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
export { useAuth };
