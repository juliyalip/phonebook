import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './conponents/Layout/Layout';
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration';

import './App.css';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />}>
    <Route index element={<Home/>} />
    <Route path="/registration" element={<Registration />} />
    </Route>
   </Routes>
  );
}

export default App;
