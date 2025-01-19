import styles from './Notification.module.css'

type IProp = {message: string}

export default function Notification({ message}: IProp) {
    return (
        <div className={styles.text}>{message}</div>
    )
}