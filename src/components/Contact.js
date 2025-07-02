import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useOnScreen } from "../utils/useOnScreen";
function Contact() {
    const whatsappNumber = "5511946289761";
    const whatsappMessage = encodeURIComponent("Olá João, vi seu portfólio e gostaria de saber mais sobre seus serviços.");
    const [ref, isVisible] = useOnScreen();
    const animated = ` animate-on-scroll ${isVisible ? 'visible' : ''} `
    return (
        <>
            <h2 className={`text-center mb-4 ${animated}`} ref={ref}>Entre em contato comigo</h2>
            <p className={`text-center mb-5 ${animated}`} ref={ref}>
                {/* Ficarei feliz em conversar sobre seu projeto, responder dúvidas ou colaborar com sua ideia.
                Me chame por onde preferir: */}
            </p>
            <Row className={`justify-content-center text-center ${animated}`} ref={ref}>
                <Col md={4} className="mb-3">
                    <Button
                        variant="success"
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-100 d-flex align-items-center justify-content-center gap-2"
                        aria-label="Falar com João no WhatsApp"
                    >
                        <i className="bi bi-whatsapp fs-5"></i> WhatsApp
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button
                        variant="outline-dark"
                        href="mailto:joaoramajo744@gmail.com?subject=Contato%20via%20portfólio"
                        className="w-100 d-flex align-items-center justify-content-center gap-2"
                        aria-label="Enviar e-mail para João"
                    >
                        <i className="bi bi-envelope fs-5"></i> E-mail
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button
                        variant="primary"
                        href="https://www.linkedin.com/in/joao-ramajo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-100 d-flex align-items-center justify-content-center gap-2"
                        aria-label="Conectar com João no LinkedIn"
                    >
                        <i className="bi bi-linkedin fs-5"></i> LinkedIn
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default Contact;
