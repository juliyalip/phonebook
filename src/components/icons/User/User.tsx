import styles from './User.module.css'

export default function User (){
    return(
        <span className={styles.container}>
        <svg className={styles.icon} height="12" viewBox="0 0 16 16" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 11.041v-.825c1.102-.621 2-2.168 2-3.716 0-2.485 0-4.5-3-4.5s-3 2.015-3 4.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"/></svg>
        </span>)
}