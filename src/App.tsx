import { Routes, Route } from 'react-router-dom';
import PrivatRoute from './components/PrivatRoute';
import { useAuth } from './context/contextAuth';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home'
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Phonebook from './pages/Phonebook/Phonebook';
import NotFound from './pages/NotFound/NotFound';
import './App.css';
import PublicRouter from './components/PublicRoute';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <PublicRouter>
            <Home />
          </PublicRouter>} />
        <Route path="/registration" element={<PublicRouter restricted><Registration /></PublicRouter>} />
        <Route path="/login" element={<PublicRouter restricted><Login /></PublicRouter>} />
        <Route
          path="/contacts"
          element={
            <PrivatRoute>
              <Phonebook />
            </PrivatRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;


