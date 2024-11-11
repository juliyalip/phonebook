import React, { useEffect, useState } from "react";
import api from "../../api-server/api";
import { useAuth } from "../../context/context";
import FormPhonebook from "../../conponents/FormPhonebook/FormPhonebook";
import ContactList from "../../conponents/ContactList/ContactList";
import { AddContact, IContact } from "../../interfaces/contact";

export default function Phonebook() {

    const [contacts, setContacts] = useState<IContact[]>([])
    const { loading } = useAuth();

    useEffect(() => {
        const getContacts = async () => {
            try {
                const { data } = await api.getContacts();
                setContacts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getContacts()
    }, []);

    const handleAddContact = async (contact: AddContact) => {
        try {
            const { data } = await api.addContact(contact);
           setContacts(prevState => [...prevState, data])
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div>
            {loading && <p>Loading...</p>}
            <FormPhonebook addContact={handleAddContact} />
            <ContactList contacts={contacts} />
        </div>
    );
}
