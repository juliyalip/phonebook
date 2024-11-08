import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/context";
import Container from "../Container/Container";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import UserMenu from "../UserMenu/UserMenu";
import styles from './AppBar.module.css'

export default function AppBar() {
const { isLoggedIn } = useContext(AuthContext)

  return (
    <Container size="large">
      <header className={styles.header}>
      <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </header>
    </Container>
  );
}
