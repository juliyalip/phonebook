import axios from "axios";
import { IRegisterUser, IUser } from "../interfaces/user";

axios.defaults.baseURL = "https://phonebook-api-c3c2.onrender.com/api";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = async (user: IRegisterUser) => {
  try {
    const data = await axios.post("/register", user);
    return data
  } catch (error) {
    console.log(error)
  }
};

const login = async (user: IUser) => {
  const { data } = await axios.post("/login", user)
  token.set(data.token)
  return data.token
}

const getCurrentUser = async () => {
  const result = await axios.get('/current');
  return result
}

const logout = async () => {
  try {
  const res =   await axios.post('/logout')
    token.unSet()
    return res
  } catch (error) {
    console.log(error)
  }
}

const api = { register, login, logout, getCurrentUser }
export default api


