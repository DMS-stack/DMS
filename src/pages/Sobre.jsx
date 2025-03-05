import React from "react";
import "../styles/Sobre.css";
import NavigationButtons from "../components/NavigationButtons";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUsers, FaMoneyBillWave, FaHome, FaBookOpen } from "react-icons/fa";

const Sobre = () => {
  return (
    <div className="sobre-container">
      {/* Introdução */}
      <motion.p
        className="sobre-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Prepare-se para dominar JavaScript com um curso prático e intensivo, projetado para transformar iniciantes em desenvolvedores prontos para o mercado.
      </motion.p>

      {/* Título */}
      <motion.h2
        className="sobre-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Curso de Programação JavaScript
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className="sobre-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Aprenda na prática e transforme sua paixão em habilidades reais.
      </motion.p>

      {/* Lista de Itens */}
      <div className="sobre-content">
        {[
          { icon: <FaCheckCircle className="icon" />, text: "Torne-se um desenvolvedor completo, sem enrolação." },
          { icon: <FaUsers className="icon" />, text: "Turmas pequenas para aprendizado personalizado." },
          { icon: <FaClock className="icon" />, text: "Duração: 8 meses com projeto final incluso." },
          { icon: <FaMoneyBillWave className="icon" />, text: "Investimento: 6.000 Kz/mês." },
          { icon: <FaHome className="icon" />, text: "Aulas em um ambiente tranquilo e acolhedor." },
          { icon: <FaBookOpen className="icon" />, text: "Foco em habilidades práticas, sem certificado formal." },
          { icon: <FaCheckCircle className="icon" />, text: "Vagas limitadas: apenas 12 alunos por turma!" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="sobre-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="icon-wrapper">{item.icon}</div>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action */}
      <motion.a
        href="/inscricao"
        className="cta-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Inscreva-se Agora
      </motion.a>
      <NavigationButtons nextPath="/Conteudo" />
    </div>
  );
};

export default Sobre;