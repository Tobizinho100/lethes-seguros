const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Adicionando o CORS para permitir chamadas de outros domínios
const connectDB = require('./config/db'); // Conexão com o MongoDB
const authRoutes = require('./routes/authRoutes'); // Rota de autenticação
const userRoutes = require('./routes/userRoutes'); // Rota de utilizadores

dotenv.config(); // Carregar variáveis de ambiente do .env

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar ao banco de dados MongoDB
connectDB();

// Middleware para parsear JSON
app.use(express.json());
app.use(cors()); // Habilita CORS para permitir requisições de diferentes origens

// Definir as rotas
app.use('/api/auth', authRoutes);  // Rota para login e registo
app.use('/api/users', userRoutes);  // Rota para manipulação de dados do utilizador

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
