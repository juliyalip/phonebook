import { NavLink } from "react-router-dom"
import { useAuth } from "../../context/context"

export default function Navigation() {
    const { isLoggedIn } = useAuth()
    return (
    <nav>
        <NavLink to="/" style={{ fontSize: '1.5rem', textDecoration: 'none' }}>Home </NavLink>
        {isLoggedIn && <NavLink to="/contacts"> Contacts</NavLink>}
    </nav>
    )
}