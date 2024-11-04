import React from "react";
import Container from "../Container/Container";
import AuthNavigation from "../AuthNavigation/AuthNavigation";

export default function AppBar() {
  return (
    <Container size="large">
      <AuthNavigation />
    </Container>
  );
}
