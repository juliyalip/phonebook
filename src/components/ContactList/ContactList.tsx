import { IContact } from '../../interfaces/contact'
import ContactItem from '../ContactItem/Contact'
import styles from './ContactList.module.css'

interface IProps {
    contacts: IContact[],
    onDelete: (_id: IContact['_id'])=> void
    onFavorite: (_id: IContact['_id'], favorite: boolean)=> void
}

export default function ContactList({ contacts, onDelete , onFavorite}: IProps) {
    return (<ul className={styles.containerList}>
        {contacts.map(contact => (
            <ContactItem key={contact._id} {...contact} onDelete={()=>onDelete(contact._id)} onFavorite={()=>{onFavorite(contact._id, contact.favorite)}}/>
        ))}
    </ul>
    )
}