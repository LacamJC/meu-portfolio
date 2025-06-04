import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const SECTIONS = ["hero", "services", "portfolio", "contact"];

function Header() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        function onScroll() {
            const scrollPos = window.scrollY + window.innerHeight / 3;

            let currentSection = SECTIONS[0];
            for (const section of SECTIONS) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPos) {
                    currentSection = section;
                }
            }
            setActiveSection(currentSection);
        }

        window.addEventListener("scroll", onScroll);
        onScroll(); // executa ao montar para definir o ativo inicial

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Navbar expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#hero"><i class="bi bi-code-slash"></i> Ramajo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#hero" className={activeSection === "hero" ? "active" : ""}>
                            Sobre mim
                        </Nav.Link>
                        <Nav.Link href="#services" className={activeSection === "services" ? "active" : ""}>
                            Serviços
                        </Nav.Link>
                        <Nav.Link href="#portfolio" className={activeSection === "portfolio" ? "active" : ""}>
                            Portfólio
                        </Nav.Link>
                        <Nav.Link href="#contact" className={activeSection === "contact" ? "active" : ""}>
                            Contato
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
