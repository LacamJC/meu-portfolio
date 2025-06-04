import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Hero.module.css";
import { useOnScreen } from "../../utils/useOnScreen";
function Hero() {
  const [ref, isVisible] = useOnScreen();

  return (
    <section className={styles.hero}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className={`${styles.content} animate-on-scroll ${isVisible ? 'visible' : ''}`} ref={ref} >
            <h1 className={styles.content__title}>
              João Ramajo
              <br />
              <span className={styles.content__subtitle}>Desenvolvedor Web & Fullstack</span>
            </h1>
            <p className={styles.content__description}>
              Transformando ideias em soluções digitais modernas, eficientes e personalizadas.
            </p>
            <div className={styles.actionRow}>
              <div className={styles.content__buttons}>
                <Button
                  variant="dark"
                  href="#portfolio"
                  className={styles.buttonPrimary}
                >
                  Ver Portfólio
                </Button>
                <Button
                  variant="outline-dark"
                  href="#contact"
                  className={styles.buttonSecondary}
                >
                  Contato
                </Button>
              </div>
              <div className={styles.content__social}>
                <a href="https://github.com/LacamJC" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/joao-ramajo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className={`${styles.imageWrapper} animate-on-scroll ${isVisible ? 'visible' : ''}`} ref={ref}>
            <img
              src="assets/images/my-and-rhaj.png" // substitua pela sua imagem real
              alt="João Ramajo"
              className={styles.image}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
