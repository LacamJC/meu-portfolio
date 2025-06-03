import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const services = [
    {
        icon: "bi-laptop",
        title: "Sites profissionais",
        description: "Criação de sites modernos com botão de WhatsApp, localização no Google Maps e design responsivo.",
    },
    {
        icon: "bi-gear",
        title: "Sistemas sob demanda",
        description: "Desenvolvimento de sistemas personalizados para controle de estoque, pedidos, agendamentos e mais.",
    },
    {
        icon: "bi-plug",
        title: "Integrações e automações",
        description: "Conexão de sistemas com APIs, planilhas, marketplaces e outros serviços para agilizar seu negócio.",
    },
    {
        icon: "bi-tools",
        title: "Suporte e manutenção",
        description: "Hospedagem, atualizações, correções e suporte técnico mensal sob medida para seu negócio.",
    },
];


function Services() {
    return (
        <>
            <h2 className="text-center mb-5">O que eu faço</h2>
            <Row>
                {services.map((service, idx) => (
                    <Col key={idx} md={6} lg={3} className="mb-4">
                        <Card className="h-100 shadow-sm">
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
