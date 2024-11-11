import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/context";

interface Iprop {
  children: React.ReactNode;
  restricted?: boolean;
}

const PublicRouter = ({ children, restricted = false }: Iprop) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/contacts" /> : <>{children}</>;
};

export default PublicRouter;
