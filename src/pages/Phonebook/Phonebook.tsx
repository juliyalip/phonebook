import React from 'react';
import { useAuth } from '../../context/context';
import FormPhonebook from '../../conponents/FormPhonebook/FormPhonebook';

export default function Phonebook() {
    const {isLoggedIn} = useAuth()
    return (
        <div>
            {!isLoggedIn && <p>Loading...</p>}
            <FormPhonebook />
        </div>
    )
}