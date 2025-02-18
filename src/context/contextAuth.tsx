import {  createContext,  useState,  ReactNode,  useContext,  useEffect } from "react";
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
updateAvatar: (value: FormData)=> void
}
const defaultAuthContext: AuthContextType = {
  user: null,
  token: null,
  setUser: () => { },
updateAvatar: () => {},
  onLogin: () => { },
  onLogout: () => { },
  isLoggedIn: false,
  loading: false,
};

export const AuthContext = createContext<AuthContextType>(defaultAuthContext);

export const AuthProvider = ({ children }: Iprop) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(() => window.localStorage.getItem("accessToken") || null );  
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const onLogout = async () => {
    await api.logout()
    window.localStorage.removeItem('accessToken');
    setToken(null);
    setUser(null);
    setIsLoggedIn(false);
    navigate("/");
  }

useEffect(() => {
  const accessToken = window.localStorage.getItem("accessToken");

  if (!accessToken) {
    api.logout().then(() => {
      window.localStorage.removeItem("accessToken");
      setToken(null);
      setUser(null);
      setIsLoggedIn(false);

    });
  } else {
    setToken(accessToken);
  }
},[] ); 


  useEffect(()=>{
    if (!token) return; 
       const fetchCurrentUser = async () => {
      setLoading(true);
      try {
        if (token) {
          axios.defaults.headers.common.Authorization = `Bearer ${token}`
          const response = await api.getCurrentUser();
          console.log('from fetch current: ', response.data)
          setUser(response?.data)
          setIsLoggedIn(true);
          navigate('/contacts')
        }
      } catch (error) {
        console.log("Error fetching current user:", error);
      } finally {
        setLoading(false);
      }
    }; if(token){
      fetchCurrentUser()
    }

  }, [token , navigate])

const updateAvatar = async(value: FormData) =>{
  try{
    const {data } = await api.changeAvatar(value);
    
    setUser((prevUser) => 
      prevUser ? { ...prevUser, avatar: data.avatar} : null
    );
   

  }catch(error){
    console.log(error)
  }
}
  
  const onLogin = async (email: string, password: string) => {
    try {
      const accessToken = await api.login({ email, password })
      window.localStorage.setItem('accessToken', accessToken);
setToken(accessToken)
         setIsLoggedIn(true)
      navigate('/contacts')
    } catch (error) {
      console.log('error from login', error)
    }
  }



  return (
    <AuthContext.Provider
      value={{ user, token, isLoggedIn, loading, setUser, onLogin, onLogout, updateAvatar }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);


