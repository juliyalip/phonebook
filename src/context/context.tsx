import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { useFormValue } from "../hooks/useFormValue";
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
  token: string;
  isLoggedIn: boolean;
  loading: boolean;
}
const defaultAuthContext: AuthContextType = {
  user: null,
  token: "",
  setUser: () => {},
  onLogin: () => {},
  onLogout: () => {},
  isLoggedIn: false,
  loading: false,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: Iprop) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useFormValue("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCurrentUser = async () => {
    setLoading(true);
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const result = await api.getCurrentUser();
        console.log("from fetch current", result);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
      onLogout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkUser = async () => {
      const data = await fetchCurrentUser();
      return data;
    };
    checkUser();
  }, []);

  const onLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.login({ email, password });
      setToken(response);
      window.localStorage.setItem("token", JSON.stringify(response));
      navigate("/contacts");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = async () => {
    try {
      const res = await api.logout();
      console.log(res);
      window.localStorage.removeItem("token");
      setToken("");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem("token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn, loading, setUser, onLogin, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
