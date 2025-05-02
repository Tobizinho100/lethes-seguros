const express = require('express');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors'); // Importar o CORS

const app = express();

// Permitir todas as origens ou configurar para um domínio específico
app.use(cors({
  origin: 'http://localhost:8100', // Frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
  preflightContinue: false,  // Garantir que as requisições OPTIONS sejam tratadas
  optionsSuccessStatus: 200,  // Para suportar navegadores mais antigos
}));

app.use(express.json());

const PORT = 3000;
const DB_PATH = './users.json';
const JWT_SECRET = 'chave-super-secreta';

// Lê a "base de dados"
function lerUtilizadores() {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH));
  } catch (error) {
    return []; // Retorna um array vazio caso o arquivo não exista ou haja um erro na leitura
  }
}

// Guarda na "base de dados"
function guardarUtilizadores(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Erro ao salvar utilizadores:", error);
  }
}

// Registar novo utilizador
app.post('/registar', async (req, res) => {
  const { email, password } = req.body;
  const utilizadores = lerUtilizadores();

  if (utilizadores.find(u => u.email === email)) {
    return res.status(400).json({ erro: 'Email já registado' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const novoUser = { id: Date.now(), email, password: hashedPassword };
  utilizadores.push(novoUser);
  guardarUtilizadores(utilizadores);
  res.status(201).json({ mensagem: 'Utilizador registado com sucesso' });
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const utilizadores = lerUtilizadores();
  const user = utilizadores.find(u => u.email === email);

  if (!user) return res.status(400).json({ erro: 'Email ou password inválidos' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ erro: 'Email ou password inválidos' });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ mensagem: 'Login bem-sucedido', token });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`API de utilizadores a correr em http://localhost:${PORT}`);
});
