import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Services from "../Services/Services";
import Portfolio from "../components/Portfolio/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer.js";
import Hero from "../components/Hero/Hero";
import ProductCards from "../components/ProductCard/ProductCard";
import ProductsSummary from "../components/ProductsSummary/ProductsSummary.js";

function Home() {
    const products = [
        {
            title: "SmartReport",
            description: "Ferramenta personalizável para gerar relatórios e insights inteligentes para seu negócio.",
            iconClass: "bi bi-bar-chart-line", // ícone do bootstrap-icons para gráfico de barras
            link: "/servico/smartreport"
        }
        // Pode adicionar mais produtos aqui futuramente
    ];
    return (
        <>
            {/* <Header /> */}
            <main>

                <section id="hero" className="py-5">
                    <Container>
                        <Hero />
                    </Container>
                </section>

                <section id="services" className="py-5" >
                    <Container >
                        <Services />
                    </Container>
                </section>

                <section id="portfolio" className="bg-light py-5">
                    <Container>
                        <Portfolio />
                    </Container>
                </section>


                <section id="produtos" className="bg-light py-5">
                    <Container>
                        <ProductsSummary/>
                    </Container>
                </section>

                <section id="contact" className="py-5">
                    <Container>
                        <Contact />
                    </Container>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Home;