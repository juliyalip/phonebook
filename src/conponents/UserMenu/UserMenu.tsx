import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/context"
import Button from '../Button/Button'
import styles from  './UserMenu.module.css'

export default function UserMenu() {
    const navigate = useNavigate()
    const {onLogout } = useAuth()
    const handleOnClick = () => {
      onLogout()
      navigate('/')
    }
    return (
        <div className={styles.container}>
            <span className={styles.greetingText}>Welcome to your phonebook</span>
            <Button onClick={handleOnClick}>Logout</Button>
        </div>
    )
}
