import React from "react";
import { Row, Col, Button } from "react-bootstrap";

function Contact() {
    const whatsappNumber = "5511999999999"; // Substitua pelo seu número real
    const whatsappMessage = encodeURIComponent("Olá João, vi seu portfólio e gostaria de saber mais sobre seus serviços.");

    return (
        <>
            <h2 className="text-center mb-4">Vamos conversar?</h2>
            <p className="text-center mb-5">
                Estou pronto para ajudar seu negócio com soluções sob medida. Escolha uma forma de contato abaixo:
            </p>
            <Row className="justify-content-center text-center">
                <Col md={4} className="mb-3">
                    <Button
                        variant="success"
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        className="w-100"
                    >
                        <i className="bi bi-whatsapp me-2"></i> Falar pelo WhatsApp
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button
                        variant="outline-dark"
                        href="mailto:joao@email.com"
                        className="w-100"
                    >
                        <i className="bi bi-envelope me-2"></i> Enviar e-mail
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Contact;
