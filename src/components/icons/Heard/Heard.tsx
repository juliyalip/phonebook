import classNames from "classnames"
import styles from './Heard.module.css'

interface IProp {
    color?: boolean,
    onFavorite: ()=>void
}

export default function Heard({ color, onFavorite }: IProp) {
    const style = classNames(styles.base, {
        [styles.active]: color
    })
    return (
        <svg onClick={onFavorite} className={style} version="1.1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32">
            <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
        </svg>
    )
}