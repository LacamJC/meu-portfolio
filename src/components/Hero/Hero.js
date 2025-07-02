import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaBootstrap, FaCss3Alt, FaFigma, FaGitAlt, FaGithubSquare, FaHtml5, FaJava, FaLinkedin, FaLinux, FaNodeJs, FaPhp, FaSass } from "react-icons/fa"
import { SiExpress, SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaLaravel } from "react-icons/fa";
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
              JOÃO RAMAJO
              <br />
              <span className={styles.content__subtitle}>Desenvolvedor Backend
              </span>
            </h1>
            {/* <p className={styles.content__description}>
              Construindo soluções digitais que facilitam processos, aumentam resultados e fazem sua empresa crescer.
            </p> */}
            <p className={styles.content__strongwords}>
              <FaLaravel className={`${styles.icon}`} />
              <SiMysql className={`${styles.icon}`} />
              <FaPhp className={`${styles.icon}`} />
              <FaNodeJs className={`${styles.icon}`} />
              <FaGitAlt className={`${styles.icon}`} />
              <FaBootstrap className={`${styles.icon}`} />
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
                  href="/docs/curriculo_joao_ramajo_desenvolvedor_backend.pdf"
                  target="_blank"
                  className={styles.buttonSecondary}
                >
                  Currículo
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
