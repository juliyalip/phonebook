import axios from "axios";
import { IRegisterUser, IUser } from "../interfaces/user";
import { AddContact } from "../interfaces/contact";

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

const login = async (user: IRegisterUser) => {
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

const getContacts = async()=>{
  try{
  const response = await axios.get('/contacts')
  return response
}catch(error){
  console.log(error)
}
}

const addContact = async({name, number}: AddContact) =>{
  const newContact = await axios.post('/contacts' , {name, number});
  return newContact
}

const api = { register, login, logout, getCurrentUser , getContacts, addContact}
export default api


