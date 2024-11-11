import {Link} from 'react-router-dom'
import {IContact} from '../../interfaces/contact'
import Heard from '../Heard/Heard'
import styles from './ContactItem.module.css'

export default function ContactItem({name, number, favorite, _id }: IContact){
   
    return (
        <li className={styles.containerItem}>
<Link to={`${_id}`} className={styles.linkItem}>
<span>{name}</span>
<div className={styles.numberSection}>
    <span>{number}</span>
    <span>{favorite}</span>
    <Heard color={favorite}/>
</div>
</Link>
        </li>
    )
}