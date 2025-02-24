import axios , { AxiosError } from "axios";
import { IRegisterUser } from "../interfaces/user";
import { AddContact, IContact } from "../interfaces/contact";

  axios.defaults.baseURL = "https://phonebook-api-c3c2.onrender.com/api";

//  axios.defaults.baseURL = "http://localhost:8800/api/";

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
    if (error instanceof AxiosError && error.response?.status === 409) {
      throw error; 
    }
    throw error; 
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

const changeAvatar = async(avatar: FormData) =>{
  const result = await axios.patch('/upload', avatar)
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

const upDateContactProperty = async(id: IContact['_id'], isFavorite:boolean)=>{
  const update = await axios.patch(`/contacts/${id}/favorite` , {favorite: isFavorite})
  return update
}

const deleteContact = async(_id: IContact['_id'] )=>{
  await axios.delete(`/contacts/${_id}`)

}

const api = { register, login, logout, getCurrentUser , changeAvatar, getContacts, addContact, deleteContact, upDateContactProperty}
export default api


