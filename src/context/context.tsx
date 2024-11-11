import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";
import { useFormValue } from "../hooks/useFormValue";
import { IUser} from "../interfaces/user";
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
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCurrentUser = async () => {
    setLoading(true);
    try {
      const token = window.localStorage.getItem("token");
      if (token) {
        const {data} = await api.getCurrentUser();
        setUser(data)
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
    const initializeAuth = async () => {
      const accessToken = window.localStorage.getItem("token");
  
      if (accessToken) {
        setToken(accessToken); 
        await fetchCurrentUser();
      } else {
        setIsLoggedIn(false);
      }
    };
    
    initializeAuth();
  }, []);

  const onLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.login({ email, password });
      setToken(response);
      window.localStorage.setItem("token", JSON.stringify(response));
      await fetchCurrentUser()
      navigate("/contacts");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onLogout = async () => {
    try {
      await api.logout();
      window.localStorage.removeItem("token");
      setToken("");
      setUser(null)
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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


