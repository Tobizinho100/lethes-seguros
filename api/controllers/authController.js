const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Função de registo
const register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  // Verificar se todos os campos obrigatórios estão presentes
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Nome, email, senha e confirmação de senha são obrigatórios.' });
  }

  // Verificar se as senhas correspondem
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'As senhas não correspondem.' });
  }

  try {
    // Verificar se o utilizador já existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Este email já está registado.' });
    }

    // Gerar o hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar o novo utilizador
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Armazenar a senha de forma segura
    });

    // Salvar o utilizador no banco de dados
    await newUser.save();

    res.status(201).json({ message: 'Utilizador registado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no registo', error });
  }
};

// Função de login
const login = async (req, res) => {
  const { email, password } = req.body;

  // Verificar se todos os campos obrigatórios estão presentes
  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  try {
    // Verificar se o utilizador existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Utilizador não encontrado.' });
    }

    // Verificar se a senha fornecida está correta
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Senha incorreta.' });
    }

    // Gerar o token JWT
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login bem-sucedido.',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no login.', error });
  }
};

module.exports = { register, login };
