import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container className="text-center">
        <small>&copy; {new Date().getFullYear()} João Ramajo. Todos os direitos reservados.</small>
      </Container>
    </footer>
  );
}

export default Footer;
