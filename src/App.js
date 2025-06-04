import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Services from "./Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
function App() {
  return (
    <>
      <Header />
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

export default App;
