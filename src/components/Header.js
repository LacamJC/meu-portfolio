import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import NavLinkAdaptativo from "../utils/NavLinkAdaptativo";

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
                <Navbar.Brand href="/"><i class="bi bi-code-slash"></i> Ramajo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <NavLinkAdaptativo section="hero" label="Sobre mim" activeSection={activeSection} />
                        {/* <NavLinkAdaptativo section="services" label="Serviços" activeSection={activeSection} /> */}
                        <NavLinkAdaptativo section="portfolio" label="Portfólio" activeSection={activeSection} />
                        <NavLinkAdaptativo section="contact" label="Contato" activeSection={activeSection} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
