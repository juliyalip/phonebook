import { Link } from "react-router-dom";

export default function AuthNavigation() {
  return (
    <ul>
      <li>
        <Link to="/registration">Registration</Link>
      </li>
      <li>
        <Link to="/login">login</Link>
      </li>
    </ul>
  );
}
