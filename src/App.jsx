import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Conteudo from "./pages/Conteudo";
import Inscricao from "./pages/Inscricao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Conteudo" element={<Conteudo />} />
        <Route path="/Inscricao" element={<Inscricao/>} />
      </Routes>
    </Router>
  );
}

export default App;
