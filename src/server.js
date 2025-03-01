import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect("mongodb://localhost:27017/inscricoes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Criar modelo do banco de dados
const InscricaoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
});

const Inscricao = mongoose.model("Inscricao", InscricaoSchema);

// ✅ Corrigindo a ROTA para "/inscricao"
app.post("/inscricao", async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novaInscricao = new Inscricao({ nome, email, telefone });
    await novaInscricao.save();
    res.status(201).json({ message: "Inscrição realizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar inscrição", error });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Conectar ao MongoDB
mongoose.connect("mongodb://localhost:27017/inscricoes", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error("Erro ao conectar ao MongoDB:", err));

// Criar modelo do banco de dados
const InscricaoSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
});

const Inscricao = mongoose.model("Inscricao", InscricaoSchema);

// ✅ Corrigindo a ROTA para "/inscricao"
app.post("/inscricao", async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novaInscricao = new Inscricao({ nome, email, telefone });
    await novaInscricao.save();
    res.status(201).json({ message: "Inscrição realizada com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao salvar inscrição", error });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
