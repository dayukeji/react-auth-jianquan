import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Protected from './components/Protected';
import Public from './components/Public';
import Layout from './components/Layout';
import Noauth from './components/Noauth';
import AuthProvider from './auth/auth';
import AuthRequired from './auth/AuthRequired';

export default function App() {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route element={<Layout />} path="/">
            <Route
              path="/Admin"
              element={
                <AuthRequired requiredAuth={'admin'}>
                  <Admin />
                </AuthRequired>
              }
            ></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route
              path="/Protected"
              element={
                <AuthRequired>
                  <Protected />
                </AuthRequired>
              }
            ></Route>
            <Route path="/Public" element={<Public />}></Route>
            <Route path="/Noauth" element={<Noauth />}></Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}
