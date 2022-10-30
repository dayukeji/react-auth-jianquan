import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Protected from './components/Protected';
import Public from './components/Public';
import Layout from './components/Layout';
import AuthProvider from './auth/auth';

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route path="/Admin" element={<Admin />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Protected" element={<Protected />}></Route>
            <Route path="/Public" element={<Public />}></Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
