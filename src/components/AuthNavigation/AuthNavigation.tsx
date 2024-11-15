import { Link } from "react-router-dom";
import styles from './AuthNavigation.module.css'

export default function AuthNavigation() {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link to="/registration">Registration</Link>
      </li>
      <li className={styles.item}>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
}
