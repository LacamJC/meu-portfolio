import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import styles from './Services.module.css';

const services = [
  {
    icon: "bi-laptop",
    title: "Sites e Interfaces Modernas",
    description:
      "Criação de sites e interfaces responsivas, modernos e funcionais, que garantem ótima experiência em dispositivos móveis e desktop. Uso das melhores práticas de design para destacar sua marca e facilitar a navegação dos seus clientes.",
  },
  {
    icon: "bi-gear",
    title: "Desenvolvimento de Sistemas Sob Medida",
    description:
      "Desenvolvimento de sistemas personalizados para atender às necessidades específicas do seu negócio, como controle de estoque, gestão de pedidos, automações e integração com outras plataformas via APIs seguras e eficientes.",
  },
  {
    icon: "bi-ui-checks-grid",
    title: "Consultoria em Experiência do Usuário (UX/UI)",
    description:
      "Análise e aprimoramento da experiência e design de seu site ou sistema para tornar o uso mais intuitivo e agradável, aumentando a satisfação do usuário e facilitando a conversão de visitantes em clientes.",
  },
];

function Services() {
  return (
    <>
      <h2 className="text-center mb-4">Como posso ajudar?</h2>
      <p
        className="text-center mb-5"
        style={{ maxWidth: "600px", margin: "0 auto", color: "#555" }}
      >
        Com experiência em desenvolvimento web e sistemas, ofereço soluções sob medida que unem eficiência, qualidade e inovação para transformar suas ideias em resultados concretos.
      </p>
      <Row>
        {services.map((service, idx) => (
          <Col key={idx} md={8} lg={6} className="mb-4">
            <Card className={`h-100 shadow-sm ${styles.servicesCard}`}>
              <Card.Body>
                <Card.Title>
                  <i className={`bi ${service.icon} me-2`}></i> {service.title}
                </Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Services;
