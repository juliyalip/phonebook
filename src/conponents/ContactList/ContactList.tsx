import { IContact } from '../../interfaces/contact'
import ContactItem from '../ContactItem/Contact'
import styles from './ContactList.module.css'

interface IProps {
    contacts: IContact[]
}

export default function ContactList({ contacts }: IProps) {
    return (<ul className={styles.containerList}>
        {contacts.map(contact => (
            <ContactItem key={contact._id} {...contact} />
        ))}
    </ul>
    )
}