import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/contextAuth"
import styles from  './UserMenu.module.css'

export default function UserMenu() {
    const navigate = useNavigate()
    const { user,onLogout } = useAuth()
  
    const handleOnClick = () => {
     onLogout()
      navigate('/')
    }
    return (
        <div className={styles.container}>
            <span className={styles.greetingText}>Welcome {user?.name}</span>
            <span onClick={handleOnClick} className={styles.logout}>Logout</span>
        </div>
    )
}
