import React from "react";
import "../styles/Sobre.css";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaUsers, FaMoneyBillWave, FaHome, FaBookOpen } from "react-icons/fa";


const Sobre = () => {
  return (
    <div className="sobre-container">
      <motion.h2 
        className="sobre-title"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        🚀 Curso de Programação JavaScript
      </motion.h2>
      
      <motion.p 
        className="sobre-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Aprenda na prática e transforme sua paixão em uma habilidade.
      </motion.p>
      
      <div className="sobre-content">
        {[
          { icon: <FaCheckCircle className="icon check" />, text: "Aprenda a ser um desenvolvedor de verdade, sem enrolação." },
          { icon: <FaUsers className="icon users" />, text: "Ambiente confortável para se sentir à vontade enquanto aprende." },
          { icon: <FaUsers className="icon users" />, text: "Pequenas turmas para garantir atenção personalizada." },
          { icon: <FaClock className="icon clock" />, text: "Duração: 8 meses (com projeto final)." },
          { icon: <FaMoneyBillWave className="icon money" />, text: "Investimento: 6.000Kz/mês." },
          { icon: <FaCheckCircle className="icon check" />, text: "Vagas limitadas: apenas 12 alunos!" },
          { icon: <FaHome className="icon home" />, text: "Local: Minha casa, em um ambiente de aprendizado tranquilo." },
          { icon: <FaBookOpen className="icon book" />, text: "Curso informal: Sem certificado, o foco é transmitir habilidades reais." }
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
    </div>
  );
};

export default Sobre;
