import { CSSTransition } from "react-transition-group";
import { useRef } from 'react'
import { useAuth } from "../../context/contextAuth"
import { useToggle } from "../../hooks/useToggle"
import { ReactComponent as PensilIcon } from '../../icons/pencil.svg'
import FormLoadAvatar from "../FormLoadAvatar/FormLoadAvatar"
import styles from './UserMenu.module.css'

export default function UserMenu() {
    const { user, onLogout, updateAvatar } = useAuth()
    const [isOpen, toggle] = useToggle(false)
    const [isLoading, setIsLoading] = useToggle(false)
    const formRef = useRef(null)

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading()
        try {

            if (!formRef.current) {
                return
            }
            const avatar = new FormData(formRef.current)

            const res = await updateAvatar(avatar)
            console.log(res)
            toggle()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading()
        }
    }

    const handleOnClick = () => {
        onLogout()
    }

    return (
        <div className={styles.container}>
            <CSSTransition in={isOpen}
                timeout={250}
                classNames={{
                    enter: styles.fadeEnter,
                    enterActive: styles.fadeEnterActive,
                    exit: styles.fadeExit,
                    exitActive: styles.fadeExitActive,
                }} unmountOnExit >
                <div className={styles.formContainer}>
                    <FormLoadAvatar onSubmit={onSubmit} formRef={formRef} disabled={isLoading} />
                    <button className={styles.closeBtn} onClick={toggle} ></button>
                </div>
            </CSSTransition>

            <img src={user?.avatar} alt={user?.name} className={styles.avatar} />

            {!isOpen && <div className={styles.pensilIcon} onClick={toggle}>
                <PensilIcon width={18} />
            </div>}
            <span className={styles.greetingText}>Welcome {user?.name}</span>
            <span onClick={handleOnClick} className={styles.logout}>Logout</span>
        </div>

    )
}




