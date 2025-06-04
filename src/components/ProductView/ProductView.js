import React from "react";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import styles from "./Product.module.css";

function ProductView({
  title,
  description,
  features = [],
  imageSrc,
  imageAlt = "Imagem ilustrativa",
  buttonLabel = "Entrar em Contato",
  buttonLink = "#contact",
  accordionItems = []
}) {
  return (
    <section className={styles.products}>
      <Container>
        <Row className="align-items-center mb-5">
          <Col md={6} className={styles.textContent}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            {features.length > 0 && (
              <ul className={styles.featuresList}>
                {features.map((feature, index) => (
                  <li key={index}>
                    <i className={`bi ${feature.icon} ${styles.icon}`} aria-hidden="true"></i>
                    {feature.text}
                  </li>
                ))}
              </ul>
            )}
            <p className={styles.callToAction}>
              Quer transformar sua gestão com uma solução sob medida? Vamos conversar!
            </p>
            <Button variant="dark" href={buttonLink} target="_BLANK" className={styles.buttonContact}>
              {buttonLabel}
            </Button>
          </Col>
          <Col md={6} className={styles.imageWrapper}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className={styles.image}
              loading="lazy"
            />
          </Col>
        </Row>
        <h2>Mais informações</h2>
        {accordionItems.length > 0 && (
          <Accordion>
            {accordionItems.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        )}
      </Container>
    </section>
  );
}

export default ProductView;
