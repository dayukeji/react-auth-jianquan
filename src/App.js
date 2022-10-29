import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Routes>
        <Route element={Admin}></Route>
      </Routes>
    </div>
  );
}
