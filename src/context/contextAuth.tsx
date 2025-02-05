import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { IUser } from "../interfaces/user";
import api from "../api-server/api";

interface Iprop {
  children: ReactNode;
}

interface AuthContextType {
  user: IUser | null;
  setUser: (user: IUser) => void;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
  token: string | null;
  isLoggedIn: boolean;
  loading: boolean;

}
const defaultAuthContext: AuthContextType = {
  user: null,
  token: null,
  setUser: () => { },
  onLogin: () => { },
  onLogout: () => { },
  isLoggedIn: false,
  loading: false,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: Iprop) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(window.localStorage.getItem("accessToken") || null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const accessToken = window.localStorage.getItem("accessToken")
      if (accessToken) {
        setToken(accessToken)
        await fetchCurrentUser()
      } else {
         onLogout()
      }
    }; initializeAuth()
  }, [])

  const fetchCurrentUser = async () => {
    setLoading(true);
    try {
      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await api.getCurrentUser();
        setUser(response?.data)
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log("Error fetching current user:", error);
    } finally {
      setLoading(false);
    }
  };

  const onLogin = async (email: string, password: string) => {
    try {
      const accessToken = await api.login({ email, password })
      window.localStorage.setItem('accessToken', accessToken);
      await fetchCurrentUser()
      setIsLoggedIn(true)
      navigate('/contacts')
    } catch (error) {
      console.log('error from login', error)
    }
  }

  const onLogout = async () => {
    await api.logout()
    window.localStorage.removeItem('accessToken');
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn, loading, setUser, onLogin, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


