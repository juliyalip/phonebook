import { useContext } from "react";
import { AuthContext } from "../../context/contextAuth";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";
import styles from './AppBar.module.css'

export default function AppBar() {
const { isLoggedIn } = useContext(AuthContext)

  return (
    <header className={styles.header}>
    <Container>
      <div className={styles.headerContainer}>
      <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </div>
    </Container>
    </header>
  );
}
