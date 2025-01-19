import { useEffect, useState } from "react";
import api from "../../api-server/api";
import FormPhonebook from "../../components/FormPhonebook/FormPhonebook";
import ContactList from "../../components/ContactList/ContactList";
import Container from "../../components/Container/Container";
import Skeleton from "../../components/Skeleton/Skeleton";
import Filter from '../../components/Filter/Filter'
import { AddContact, IContact } from "../../interfaces/contact";
import styles from './Phonebook.module.css'

export default function Phonebook() {
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getContacts = async () => {
      setLoading(true)
      try {
        const response = await api.getContacts();
        setContacts(response?.data);
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }

    };
    getContacts();
  }, []);

  const isNotData = Boolean(contacts.length === 0);
  const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))

  const handleAddContact = async (contact: AddContact) => {
    try {
      const { data } = await api.addContact(contact);
      setContacts((prevState) => [...prevState, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = async (_id: string) => {
    try {
      await api.deleteContact(_id);
      setContacts(contacts => contacts.filter(contact => contact._id !== _id))
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdateFavorite = async (id: string, isFavorite: boolean) => {
    try {
      await api.upDateContactProperty(id, isFavorite);
      setContacts(contacts => contacts.map(contact => {
        if (contact._id === id) {
          return {
            ...contact,
            favorite: !contact.favorite
          }
        }
        return contact
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }


  return (
    <Container>
      {loading && <Skeleton />}
      {!loading && <FormPhonebook addContact={handleAddContact} />}
      {!loading && isNotData && <p className={styles.textNotFound} >You don't have contacts</p>}
      {!loading && contacts?.length > 0 && <Filter value={filter} onFilter={handleFilter} />}
      {!loading && contacts?.length > 0 && <ContactList contacts={filteredContacts} onDelete={handleDeleteContact} onFavorite={handleUpdateFavorite} />}

    </Container>
  );
}
