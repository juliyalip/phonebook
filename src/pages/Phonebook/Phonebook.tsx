import { useEffect, useState } from "react";
import api from "../../api-server/api";
import { useAuth } from "../../context/contextAuth";
import FormPhonebook from "../../components/FormPhonebook/FormPhonebook";
import ContactList from "../../components/ContactList/ContactList";
import { AddContact, IContact} from "../../interfaces/contact";

export default function Phonebook() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const { loading } = useAuth();

  useEffect(() => {
    const getContacts = async () => {
      const response = await api.getContacts();
      setContacts(response?.data);
    };
    getContacts();
  }, []);

  const handleAddContact = async (contact: AddContact) => {
    try {
      const { data } = await api.addContact(contact);
      setContacts((prevState) => [...prevState, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = async (_id: string) => {
    try{
      await api.deleteContact(_id);
      setContacts(contacts => contacts.filter(contact=> contact._id !== _id))
    }catch(error){
      console.log(error)
    }
  }

  const handleUpdateProperty = async(id: string, isFavorite: boolean) =>{
    try{
      await api.upDateContactProperty(id, isFavorite);
      setContacts(contacts => contacts.map(contact =>{
        if(contact._id === id){
          return{...contact, 
            favorite:!contact.favorite}
        }
        return contact
      }))
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      <FormPhonebook addContact={handleAddContact} />
  {contacts?.length >0 && <ContactList contacts={contacts} onDelete={handleDeleteContact} onFavorite={handleUpdateProperty}/>}
    </div>
  );
}
