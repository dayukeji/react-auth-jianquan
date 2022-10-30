import React, { useState } from 'react';

const AuthContext = React.createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const signIn = () => {};
  const signOut = () => {};
  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
  return <div>{children}</div>;
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export default AuthProvider;
export { useAuth };
