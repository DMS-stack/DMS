import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaMobileAlt, FaLaptopCode, FaGift, FaHome, FaInfoCircle, FaEnvelope, FaBook, FaBars, FaDatabase, FaProjectDiagram, FaServer, FaCode, FaEye, FaFilm, FaCar, FaCalendarAlt, FaShoppingCart, FaGraduationCap, FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="home-container">
      {/* Barra de Navegação - Bootstrap */}
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">Curso DMS_stack</a>

          <button className="navbar-toggler" type="button" onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-white" />
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto text-white">
              <li className="nav-item">
                <a className="nav-link d-flex align-items-center gap-2" href="#home">
                  <FaHome /> Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/sobre">
                  <FaInfoCircle /> Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/Conteudo">
                  <FaBook /> Conteúdo
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link d-flex align-items-center gap-2" to="/Inscricao">
                  <FaEnvelope /> Inscrição
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section id="home" className="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="hero-title">Domine JavaScript e Desenvolvimento Full Stack</h1>
        <p className="hero-subtitle">Aprenda do zero ao avançado com projetos reais e torne-se um desenvolvedor profissional.</p>
        <motion.button whileHover={{ scale: 1.1 }} className="cta-button">
          Inscreva-se Agora
        </motion.button>
      </motion.section>

      {/* Sobre o Curso */}
      <section id="about" className="about-section">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h2 className="section-title">🚀 O que você vai aprender?</h2>
          <p className="section-subtitle">Domine as tecnologias essenciais para se tornar um desenvolvedor Full Stack de alto nível.</p>

          <div className="topics">
            {[ 
              { icon: <FaJs className="custom-icon js" />, title: "JavaScript Moderno", description: "A base do desenvolvimento web moderno." },
              { icon: <FaReact className="custom-icon react" />, title: "React e SPA", description: "Crie aplicações dinâmicas e responsivas." },
              { icon: <FaNodeJs className="custom-icon node" />, title: "Node.js e APIs", description: "Desenvolva servidores escaláveis e eficientes." },
              { icon: <FaMobileAlt className="custom-icon mobile" />, title: "React Native", description: "Construa aplicativos móveis para Android e iOS." },
              { icon: <FaLaptopCode className="custom-icon electron" />, title: "Electron.js", description: "Criação de apps desktop com tecnologias web." },
              { icon: <FaGift className="custom-icon bonus" />, title: "Bônus Exclusivos", description: "Projetos práticos e conteúdos extras." }
            ].map((topic, index) => (
              <motion.div key={index} className="card" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
                <div className="icon-container">{topic.icon}</div>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* Projetos Profissionais */}
      <section className="projects-section">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          💻 Projetos que você desenvolverá
        </motion.h2>
        <div className="projects-grid">
          {[ 
            { icon: <FaFilm className="custom-icon" />, name: "Plataforma de Streaming", description: "Desenvolva um clone do Netflix com autenticação e reprodução de vídeos." },
            { icon: <FaCar className="custom-icon" />, name: "Clone do Uber", description: "Criação de um app de transporte com geolocalização e integração com APIs." },
            { icon: <FaCalendarAlt className="custom-icon" />, name: "Site de Agendamentos", description: "Sistema para marcar consultas ou compromissos com painel administrativo." },
            { icon: <FaShoppingCart className="custom-icon" />, name: "E-commerce Completo", description: "Lojas virtuais com carrinho de compras, pagamento e painel de gestão." },
            { icon: <FaGraduationCap className="custom-icon" />, name: "Plataforma de E-learning", description: "Ambiente de ensino online com cursos, quizzes e certificados." },
            { icon: <FaPenNib className="custom-icon" />, name: "Blog Profissional", description: "Criação de um blog dinâmico com sistema de comentários e SEO otimizado." }
          ].map((project, index) => (
            <motion.div 
              key={index} 
              className="project-card" 
              whileHover={{ scale: 1.08, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="icon-container">{project.icon}</div>
              <h4>{project.name}</h4>
              <p>{project.description}</p>
              <motion.button 
                className="view-project-btn" 
                whileHover={{ scale: 1.1, backgroundColor: "#ff9800", color: "#fff" }}
                transition={{ duration: 0.3 }}
              >
                <FaEye /> 
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Plano de Aulas */}      {/* Plano de Aulas */}
      <section id="lessons" className="lessons-section">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          📚 Plano de Aulas
        </motion.h2>
        <div className="lesson-plan">
          {[ 
            { icon: <FaJs />, title: "Módulo 1", description: "Fundamentos do JavaScript" },
            { icon: <FaCode />, title: "Módulo 2", description: "Manipulação do DOM e Eventos" },
            { icon: <FaProjectDiagram />, title: "Módulo 3", description: "Programação Assíncrona e APIs" },
            { icon: <FaReact />, title: "Módulo 4", description: "React e Desenvolvimento Frontend" },
            { icon: <FaServer />, title: "Módulo 5", description: "Node.js e Desenvolvimento Backend" },
            { icon: <FaDatabase />, title: "Módulo 6", description: "Banco de Dados e Autenticação" },
            { icon: <FaGift />, title: "Módulo 7", description: "Projetos Práticos e Avançados" }
          ].map((lesson, index) => (
            <motion.div key={index} className="lesson-card" whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}>
              <div className="lesson-icon">{lesson.icon}</div>
              <h4>{lesson.title}</h4>
              <p>{lesson.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção de Inscrição */}
      <section className="cta-section">
        <h2>Pronto para transformar sua carreira?</h2>
        <p>Inscreva-se agora e aprenda a desenvolver aplicações completas do zero!</p>
        <motion.a 
          whileHover={{ scale: 1.1 }} 
          className="cta-button" 
          href="/inscricao" 
        >
          Quero me inscrever
        </motion.a>
      </section>

      {/* Rodapé */}
      <footer id="contact" className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Curso ProDev | Todos os direitos reservados</p>
          <p>Entre em contato: <a href="mailto:contato@cursoprodev.com">contato@cursoprodev.com</a></p>
          <p>Desenvolvido por <strong>D Mário Sacalumbo</strong></p>
        </div>
      </footer>

    </div>
  );
};

export default Home;
