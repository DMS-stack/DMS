import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaTelegram, FaInfoCircle } from "react-icons/fa";
import "../styles/Inscricao.css";
import { motion } from "framer-motion";

const Inscricao = () => {
  return (
    <Container className="inscricao-container d-flex align-items-center justify-content-center min-vh-100 text-white text-center" style={{ background: "#121212", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Row className="justify-content-center w-100">
        <Col md={10} lg={8} className="p-5 shadow-lg rounded" style={{ background: "#1E1E1E", borderRadius: "12px" }}>
          <motion.h2 
            className="inscricao-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Curso de JavaScript e Desenvolvimento Web
          </motion.h2>
          <motion.p 
            className="inscricao-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            🚀 Uma oportunidade única para aprender programação de forma prática e eficiente!
          </motion.p>
          <motion.p 
            className="inscricao-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <FaInfoCircle className="info-icon me-2" size={20} color="#FFD700" />
            O curso será intenso, porém acessível. Não precisa ter experiência prévia, mas comprometimento é essencial. Você aprenderá do zero ao avançado com um acompanhamento de qualidade e uma abordagem totalmente prática. Basta ter um computador básico para participar. Se tiver um mais potente, melhor ainda!
          </motion.p>
          <motion.p 
            className="inscricao-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            📢 Poucas vagas disponíveis! Haverá uma breve entrevista para garantir que você está pronto para embarcar nessa jornada de aprendizado.
          </motion.p>
          <motion.h3
            className="desafio-title mt-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            style={{ color: "#FFD700", fontWeight: "bold" }}
          >
            Aceitas o desafio? 💪🔥
          </motion.h3>
          <div className="text-center mt-4">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="primary"
                href="https://t.me/seuTelegram" // Substitua pelo link real do Telegram
                target="_blank"
                rel="noopener noreferrer"
                className="inscricao-button d-flex align-items-center justify-content-center p-3"
                style={{ fontSize: "1.2rem", fontWeight: "bold", background: "#0088cc", border: "none", borderRadius: "8px" }}
              >
                <FaTelegram size={24} className="me-2" /> Inscreva-se no Telegram
              </Button>
            </motion.div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Inscricao;
