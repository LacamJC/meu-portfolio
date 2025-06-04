import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard"; // Assumindo que o ProductCard já está criado

const products = [
  {
    title: "SmartReport",
    description: "Ferramenta personalizável para geração de relatórios e visualização de dados em tempo real.",
    iconClass: "bi bi-bar-chart-line",
    link: "/servico/smartreport",
  },
    {
    title: "ExpenseTrack",
    description: "Seu controle financeiro a simples e direto",
    iconClass: "bi-bar-chart-line",
    link: "/servico/expense-track",
  },
  // Você pode adicionar outros produtos aqui futuramente
];

function ProductsSummary() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Soluções sob medida</h2>
        <p className="text-center mb-5">
          Explore ferramentas personalizáveis desenvolvidas para facilitar a rotina do seu negócio.
        </p>
        <Row>
          {products.map((product, index) => (
            <Col md={6} lg={4} key={index}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ProductsSummary;
