import React, { useEffect, useState } from "react";
import api from "../../api-server/api";
import { useAuth } from "../../context/contextAuth";
import FormPhonebook from "../../conponents/FormPhonebook/FormPhonebook";
import ContactList from "../../conponents/ContactList/ContactList";
import { AddContact, IContact } from "../../interfaces/contact";

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

  return (
    <div>
      {loading && <p>Loading...</p>}
      <FormPhonebook addContact={handleAddContact} />
  {contacts?.length >0 &&    <ContactList contacts={contacts} />}
    </div>
  );
}
