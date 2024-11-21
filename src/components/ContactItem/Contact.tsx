import { Link } from "react-router-dom";
import { IContact } from "../../interfaces/contact";
import Heard from "../icons/Heard/Heard";
import User from "../icons/User/User";
import styles from "./ContactItem.module.css";

interface IProp extends IContact {
  onDelete: () => void,
  onFavorite: () => void
}

export default function ContactItem({ name, number, favorite, _id, onDelete, onFavorite }: IProp) {

  return (
    <li className={styles.containerItem}>
      <User />
      <Link className={styles.link} to={`${_id}`}>
        <span >{name}</span>
        <span >{number}</span>
      </Link>
      <div className={styles.controlSection}>
        <Heard color={favorite} onFavorite={onFavorite} />
        <svg className={styles.basket} onClick={onDelete} height="15" viewBox="0 0 16 16" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1v-10zm3 9h-1v-7h1zm2 0h-1v-7h1zm2 0h-1v-7h1zm2 0h-1v-7h1z" /><path d="m13.25 2h-3.25v-1.25c0-.412-.338-.75-.75-.75h-3.5c-.412 0-.75.338-.75.75v1.25h-3.25c-.413 0-.75.337-.75.75v1.25h13v-1.25c0-.413-.338-.75-.75-.75zm-4.25 0h-3v-.987h3z" /></svg>
      </div>
    </li>
  );
}
