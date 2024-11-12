import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/contextAuth"
import styles from './Navigation.module.css'

export default function Navigation() {
    const { isLoggedIn } = useAuth()
    return (
    <nav>
        <NavLink to="/" className={styles.title}>Home </NavLink>
        {isLoggedIn && <NavLink to="/contacts" className={styles.title}> Contacts</NavLink>}
    </nav>
    )
}