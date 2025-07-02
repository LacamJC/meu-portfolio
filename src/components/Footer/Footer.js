import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import NavLinkAdaptativo from "../../utils/NavLinkAdaptativo";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Navegação</h5>
            <ul className={styles.linkList}>
              <li><NavLinkAdaptativo section="hero" label="Sobre mim" /></li>
              {/* <li><NavLinkAdaptativo section="services" label="Serviços" /></li> */}
              <li><NavLinkAdaptativo section="portfolio" label="Portfólio" /></li>
              <li><NavLinkAdaptativo section="contact" label="Contato" /></li>
            </ul>
          </Col>
          <Col md={4}>
            {/* <h5>Produtos</h5> */}
            {/* <ul className={styles.linkList}> */}
              {/* <li><Link to="/servico/smartreport">SmartReport</Link></li> */}
              {/* Mais produtos aqui */}
            {/* </ul> */}
          </Col>
          <Col md={4}>
            <h5>Contato</h5>
            <p>Email: joaoramajo744@gmail.com</p>
            <p>Telefone: (11) 94628-9761</p>
            <div className={styles.socialIcons}>
              <a 
                href="https://www.linkedin.com/in/joao-ramajo" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <i className="bi bi-linkedin" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a 
                href="https://github.com/LacamJC" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <small>© 2025 João Ramajo. Todos os direitos reservados.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
