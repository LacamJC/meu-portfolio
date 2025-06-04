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
      "Plataforma para facilitar a coleta de lixo reciclável, combater descarte irregular e apoiar a proteção ambiental. Conta com cadastro de usuários, pontos de coleta exibidos em mapas, e área de feedback.",
    features: [
      "Cadastro de usuários com MySQL e Sequelize",
      "Pontos de coleta via API do Google Maps",
      "Feedback dos usuários"
    ],
    technologies: ["React", "Node.js", "MySQL", "Sequelize", "Bootstrap", "SCSS"],
    categories: ["Projeto Web", "Sustentabilidade"],
    link: "https://github.com/LacamJC/ReactNPR",
    images: [
      "https://placehold.co/250x180",
      "https://placehold.co/250x180",
      "https://placehold.co/250x180"
    ]
  },
  {
    title: "My Bookshelf 2025",
    description:
      "Sistema para cadastro e gerenciamento de livros com login, controle de usuários e validações. Interface pensada para usabilidade com front-end em HTML/CSS e back-end em PHP puro orientado a objetos.",
    features: [
      "Login de usuários",
      "CRUD completo de livros",
      "Campos detalhados (autores, capa, descrição, etc)",
      "Validações com mensagens claras"
    ],
    technologies: ["PHP", "HTML", "CSS (BEM)", "Bootstrap", "MySQL"],
    categories: ["Sistema de Gerenciamento"],
    link: "https://github.com/LacamJC/My_Bookshelf_2025",
    images: [
      "https://placehold.co/250x180",
      "https://placehold.co/250x180"
    ]
  },
  {
    title: "FilmsOnViews",
    description:
      "Site informativo sobre filmes do Studio Ghibli, com trailers, sinopses e suporte a múltiplos idiomas. Design responsivo e links para assistir aos filmes online.",
    features: [
      "Multilíngue: português, inglês e japonês",
      "Trailers integrados",
      "Layout responsivo",
      "Links para Netflix"
    ],
    technologies: ["HTML5", "CSS3", "SCSS", "JavaScript"],
    categories: ["Site Informativo", "Multilíngue"],
    link: "https://github.com/LacamJC/FilmsOnViews",
    images: [
      "https://placehold.co/250x180",
      "https://placehold.co/250x180",
      "https://placehold.co/250x180",
      "https://placehold.co/250x180"
    ]
  }
];


function Portfolio() {
  return (
    <>
      <h2 className="text-center mb-5">Portfólio</h2>
      <Row className="gy-4">
        {projects.map((project, idx) => (
          <Col key={idx} xs={12}>
            <div className={styles.projectCard}>
              <Row className="g-0">
                {/* Coluna de imagens */}
                <Col md={5} className={styles.projectCard__images}>
                  <div className={styles.imageGrid}>
                    {(project.images && project.images.length > 0 ? project.images : [project.image]).slice(0, 4).map((img, i) => (
                      <a key={i} href={img} target="_blank" rel="noopener noreferrer">
                        <img src={img} alt={`${project.title} ${i + 1}`} />
                      </a>
                    ))}
                  </div>
                </Col>

                {/* Coluna de informações */}
                <Col md={7} className={styles.projectCard__info}>
                  <h3 className={styles.projectCard__title}>{project.title}</h3>
                  <p className={styles.projectCard__description}>{project.description}</p>

                  {/* Badges de categoria */}
                  <div className={styles.projectCard__badges}>
                    {project.categories?.slice(0, 4).map((cat, i) => (
                      <span
                        key={i}
                        className={styles.projectCard__badge}
                        style={{
                          backgroundColor: categoryColors[cat] || "#ccc",
                          color: "#fff"
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant=""
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.projectCard__button} btn-outline-dark`}
                  >
                    Ver projeto
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        ))}

      </Row>

    </>
  );
}

export default Portfolio;
