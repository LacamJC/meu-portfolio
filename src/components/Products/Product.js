import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./Product.module.css";

function Products() {
  return (
    <section className={styles.products}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className={styles.textContent}>
            <h2 className={styles.title}>Solução Inteligente para o Seu Negócio</h2>
            <p className={styles.description}>
              Ofereço uma ferramenta personalizável que transforma dados complexos em informações claras e estratégicas, ajudando você a tomar decisões rápidas e assertivas.
            </p>
            <ul className={styles.featuresList}>
              <li>
                <i className={`bi bi-check-circle ${styles.icon}`} aria-hidden="true"></i>
                Personalização conforme sua necessidade
              </li>
              <li>
                <i className={`bi bi-rocket ${styles.icon}`} aria-hidden="true"></i>
                Serviço ágil e confiável
              </li>
              <li>
                <i className={`bi bi-puzzle ${styles.icon}`} aria-hidden="true"></i>
                Integração fácil com seus sistemas
              </li>
            </ul>
            <p className={styles.callToAction}>
              Quer transformar sua gestão com uma solução sob medida? Vamos conversar!
            </p>
            <Button
              variant="dark"
              href="#contact"
              className={styles.buttonContact}
            >
              Entrar em Contato
            </Button>
          </Col>
          <Col md={6} className={styles.imageWrapper}>
            <img
              src="https://placehold.co/600x400" // Substitua pelo caminho real
              alt="Ilustração da solução inteligente"
              className={styles.image}
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Products;
