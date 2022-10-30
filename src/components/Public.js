import React from 'react';
import { useAuth } from '../auth/auth';
const Public = () => {
  const auth = useAuth();
  console.log('auth', auth);
  return <div>Public</div>;
};

export default Public;
