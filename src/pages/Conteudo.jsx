import React, { useState } from "react";
import "../styles/Conteudo.css";
import NavigationButtons from "../components/NavigationButtons";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const modulos = [
  {
    titulo: "Módulo 1: Fundamentos da Web",
    aulas: [
      { titulo: "Aula 1: Introdução ao Desenvolvimento Web", conteudo: ["O que é desenvolvimento web", "Funcionamento da internet (clientes, servidores, requisições HTTP)", "Tecnologias principais: HTML, CSS e JavaScript"] },
      { titulo: "Aula 2: HTML Essencial", conteudo: ["Estrutura básica do HTML", "Elementos essenciais", "Formulários e inputs", "Semântica e acessibilidade"] },
      { titulo: "Aula 3: CSS Essencial", conteudo: ["Seletores e propriedades", "Box model e layout", "Media queries e design responsivo"] },
      { titulo: "Projeto 1", conteudo: ["Criando um Portfólio Simples"] },
    ],
  },
  {
    titulo: "Módulo 2: JavaScript Moderno",
    aulas: [
      { titulo: "Aula 4: Introdução ao JavaScript", conteudo: ["O que é JavaScript e como funciona", "Variáveis (let, const, var)", "Tipos de dados e operadores"] },
      { titulo: "Aula 5: Estruturas de Controle e Funções", conteudo: ["Condicionais (if, else, switch)", "Loops (for, while, do while)", "Funções e escopo"] },
      { titulo: "Aula 6: Arrays e Objetos", conteudo: ["Métodos essenciais de arrays (map, filter, reduce)", "Objetos e manipulação de propriedades"] },
      { titulo: "Aula 7: Manipulação do DOM", conteudo: ["Seleção de elementos", "Eventos e listeners", "Alteração dinâmica de estilos e classes"] },
      { titulo: "Aula 8: Assíncronismo e APIs", conteudo: ["Promises e async/await", "Fetch API e consumo de APIs REST", "Manipulação de JSON"] },
      { titulo: "Projeto 2", conteudo: ["To-Do List Dinâmica"] },
    ],
  },
  {
    titulo: "Módulo 3: JavaScript para Web (React.js)",
    aulas: [
      { titulo: "Aula 9: Introdução ao React", conteudo: ["O que é React e como funciona", "Criando um projeto com Vite", "Componentes e JSX"] },
      { titulo: "Aula 10: Estado e Props", conteudo: ["useState e gestão de estado", "Passagem de props entre componentes"] },
      { titulo: "Aula 11: Efeitos e Ciclo de Vida", conteudo: ["useEffect e efeitos colaterais", "Comunicação com APIs no React"] },
      { titulo: "Aula 12: React Router e Navegação", conteudo: ["Rotas e links dinâmicos", "Parâmetros de URL e navegação programática"] },
      { titulo: "Aula 13: Context API e Gestão de Estado Global", conteudo: ["Criando um contexto global", "Usando useContext para partilha de estado"] },
      { titulo: "Projeto 3", conteudo: ["Dashboard de Tarefas com React"] },
    ],
  },
  {
    titulo: "Módulo 4: Backend com Node.js e Express",
    aulas: [
      { titulo: "Aula 14: Introdução ao Node.js", conteudo: ["O que é Node.js e como funciona", "Criando um servidor simples"] },
      { titulo: "Aula 15: Express.js e API REST", conteudo: ["Criando uma API REST", "Middlewares e rotas", "Tratamento de erros"] },
      { titulo: "Aula 16: Base de Dados com MongoDB", conteudo: ["Configuração e conexão", "Operações CRUD com Mongoose"] },
      { titulo: "Projeto 4", conteudo: ["API de Utilizadores com Node.js e MongoDB"] },
    ],
  },
  {
    titulo: "Módulo 5: Desenvolvimento Mobile com React Native",
    aulas: [
      { titulo: "Aula 17: Introdução ao React Native", conteudo: ["Diferenças entre React e React Native", "Configuração do ambiente"] },
      { titulo: "Aula 18: Componentes Nativos e Estilização", conteudo: ["View, Text, Image e ScrollView", "Estilização com StyleSheet"] },
      { titulo: "Aula 19: Navegação e AsyncStorage", conteudo: ["React Navigation", "Armazenamento local com AsyncStorage"] },
      { titulo: "Projeto 5", conteudo: ["App de Notas com React Native"] },
    ],
  },
  {
    titulo: "Módulo 6: Aplicações Desktop com Electron",
    aulas: [
      { titulo: "Aula 20: Introdução ao Electron.js", conteudo: ["O que é Electron e como funciona", "Criando uma aplicação simples"] },
      { titulo: "Aula 21: Comunicação entre Processos", conteudo: ["Processos main e renderer", "IPC para comunicação entre processos"] },
      { titulo: "Projeto 6", conteudo: ["Aplicação de Tarefas para Desktop"] },
    ],
  },
  {
    titulo: "Módulo 7: UI/UX e Design com Figma",
    aulas: [
      { titulo: "Aula 22: Introdução ao Figma e Design de Interfaces", conteudo: ["Ferramentas essenciais do Figma", "Criando wireframes e protótipos"] },
      { titulo: "Aula 23: Exportação e Colaboração", conteudo: ["Exportação de elementos", "Colaboração com desenvolvedores"] },
      { titulo: "Projeto 7", conteudo: ["Design de um Sistema Completo"] },
    ],
  },
  {
    titulo: "Módulo 8: Projeto Final Completo",
    aulas: [{ titulo: "Desenvolvimento de uma aplicação completa", conteudo: ["Integração de todas as tecnologias abordadas"] }],
  },
  {
    titulo: "Módulo 9: Desenvolvimento de Grandes Aplicações Web",
    aulas: [
      { titulo: "Plataforma de Streaming", conteudo: [] },
      { titulo: "Aplicação Estilo Uber", conteudo: [] },
      { titulo: "Sistema de Agendamento Online", conteudo: [] },
      { titulo: "E-commerce Completo", conteudo: [] },
    ],
  },
];

const Conteudo = () => {
  const [ativo, setAtivo] = useState(null);
  return (
    <div className="conteudo-container">
      <motion.h2 className="conteudo-title" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        📚 Plano de Curso: JavaScript Completo e Desenvolvimento Web Avançado
      </motion.h2>

      {modulos.map((modulo, index) => (
        <div key={index} className="modulo">
          <div className="modulo-header" onClick={() => setAtivo(ativo === index ? null : index)}>
            <h3>{modulo.titulo}</h3>
            {ativo === index ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {ativo === index && (
            <motion.div className="modulo-conteudo" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.5 }}>
              {modulo.aulas.map((aula, i) => (
                <div key={i} className="aula">
                  <h4>{aula.titulo}</h4>
                  <ul>{aula.conteudo.map((item, j) => <li key={j}>{item}</li>)}</ul>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      ))}
      <NavigationButtons nextPath="/Inscricao" />
    </div>
  );
};

export default Conteudo;
