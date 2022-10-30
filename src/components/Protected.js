import React from 'react';
import { useAuth } from '../auth/auth';
const Protect = () => {
  const auth = useAuth();
  console.log('auth', auth);
  return <div>Protect</div>;
};

export default Protect;
