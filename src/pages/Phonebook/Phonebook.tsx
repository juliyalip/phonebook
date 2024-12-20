import { useEffect, useState } from "react";
import api from "../../api-server/api";
import { useAuth } from "../../context/contextAuth";
import FormPhonebook from "../../components/FormPhonebook/FormPhonebook";
import ContactList from "../../components/ContactList/ContactList";
import Container from "../../components/Container/Container";
import Skeleton from "../../components/Skeleton/Skeleton";
import { AddContact, IContact} from "../../interfaces/contact";

export default function Phonebook() {
  const [contacts, setContacts] = useState<IContact[]>([]);
 const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true)
      try{
        const response = await api.getContacts();
        setContacts(response?.data);
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
     
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

  const handleUpdateFavorite = async(id: string, isFavorite: boolean) =>{
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
    <Container>
      <FormPhonebook addContact={handleAddContact} />
      {loading && <Skeleton />}
      {!loading && contacts?.length >0 && <ContactList contacts={contacts} onDelete={handleDeleteContact} onFavorite={handleUpdateFavorite}/> }
  
    </Container>
  );
}
