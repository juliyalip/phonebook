import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivatRoute from './conponents/PrivatRoute';
import { useAuth } from './context/context';
import Layout from './conponents/Layout/Layout';
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Contacts from './pages/Contacts/Contacts'
import NotFound from './pages/NotFound/NotFound';

import './App.css';

function App() {
  const { isLoggedIn } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={
            <Contacts />
           
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;


