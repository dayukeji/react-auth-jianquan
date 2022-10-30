import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Login from './components/Login';
import Protected from './components/Protected';
import Public from './components/Public';
import Layout from './components/Layout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Admin />} path="/Admin"></Route>
          <Route element={<Login />} path="/Login"></Route>
          <Route element={<Protected />} path="/Protected"></Route>
          <Route element={<Public />} path="/Public"></Route>
        </Route>
      </Routes>
    </div>
  );
}
