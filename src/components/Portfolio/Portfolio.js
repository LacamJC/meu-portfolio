import React from "react";
import { Row, Col, Card, Button, Badge } from "react-bootstrap";
import styles from "./Portfolio.module.css"; // assumindo que você já tenha o CSS Modules

const categoryColors = {
  "Projeto Web": "#4a90e2",          // azul
  "Sustentabilidade": "#3c873a",    // verde
  "Plataforma Interativa": "#f5a623", // amarelo-alaranjado
  "Sistema de Gerenciamento": "#7952b3", // roxo
  "Cadastro": "#e67e22",             // laranja
  "PHP": "#6e6eaa",                  // azul escuro
  "Site Informativo": "#7f8c8d",     // cinza
  "Multilíngue": "#16a085",          // verde azulado
  "Front-end": "#f39c12",            // amarelo dourado
  // outras categorias que desejar...
};
const projects = [
  {
    title: "Natureza Prioridade Renovada",
    description:
      "Plataforma para facilitar a coleta de lixo reciclável, combater descarte irregular e apoiar a proteção ambiental.",
    features: [
      "Cadastro de usuários com MySQL e Sequelize",
      "Cadastro e visualização de pontos de coleta no mapa via API Google Maps",
      "Área para feedback dos usuários",
    ],
    technologies: ["React", "Node.js", "MySQL", "Sequelize", "Bootstrap", "SCSS"],
    categories: ["Projeto Web", "Sustentabilidade"],
    link: "https://github.com/LacamJC/ReactNPR",
    image:
      "https://placehold.co/400x200",
  },
  {
    title: "My Bookshelf 2025",
    description:
      "Sistema completo para cadastro e gerenciamento de livros com login e controle de usuários.",
    features: [
      "Tela de login para usuários cadastrados",
      "Cadastro, edição e remoção de livros",
      "Campos detalhados: título, autores, número de páginas, gêneros, capa, editora e descrição",
      "Foco em boa experiência do usuário com validações e mensagens claras",
      "Front-end em HTML/CSS com BEM e Bootstrap",
      "Back-end em PHP orientado a objetos, sem frameworks",
    ],
    technologies: ["PHP", "HTML", "CSS (BEM)", "Bootstrap", "MySQL"],
    categories: ["Sistema de Gerenciamento"],
    link: "https://github.com/LacamJC/My_Bookshelf_2025",
    image: "https://placehold.co/400x200",
  },
  {
    title: "FilmsOnViews",
    description:
      "Plataforma para exibição de informações sobre filmes do Studio Ghibli, com trailers, resumos e suporte a múltiplos idiomas.",
    features: [
      "Suporte a três idiomas: português, inglês e japonês",
      "Detalhes completos de filmes com informações do diretor e redes sociais",
      "Trailer integrado e links para assistir no Netflix",
      "Design responsivo para ótima experiência em dispositivos variados",
    ],
    technologies: ["HTML5", "CSS3", "SCSS", "JavaScript"],
    categories: ["Site Informativo", "Multilíngue"],
    link: "https://github.com/LacamJC/FilmsOnViews",
    image: "https://placehold.co/400x200",
  },
];

function Portfolio() {
  return (
    <>
      <h2 className="text-center mb-5">Portfólio</h2>
      <Row>
        {projects.map((project, idx) => (
          <Col key={idx} md={6} lg={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <Card.Body>
                <Card.Title className={styles.projectTitle}>{project.title}</Card.Title>
                <Card.Text className={styles.projectDescription}>
                  {project.description}
                </Card.Text>

                {/* Badges limitadas a 4 e com cores específicas */}
                <div className={styles.badgesContainer}>
                  {project.categories.slice(0, 4).map((cat, idx) => (
                    <span
                      key={idx}
                      className={styles.categoryBadge}
                      style={{
                        backgroundColor: categoryColors[cat] || "rgba(0,0,0,0.05)",
                        color: "#fff"
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <Button
                  variant="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3"
                >
                  Ver projeto
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Portfolio;
