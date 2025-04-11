const User = require('../models/user');

// Função para atualizar o perfil
exports.updateProfile = async (req, res) => {
  const { userId } = req.body; // O id do utilizador é passado no corpo da requisição
  const { name, avatar, age, gender, location } = req.body;

  try {
    // Encontrar o utilizador pelo ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Utilizador não encontrado.' });
    }

    // Atualizar os campos fornecidos
    if (name) user.name = name;
    if (avatar) user.avatar = avatar;
    if (age !== undefined) user.age = age;
    if (gender) user.gender = gender;
    if (location) user.location = location;

    // Salvar as alterações no banco de dados
    await user.save();

    res.status(200).json({
      message: 'Perfil atualizado com sucesso.',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        gender: user.gender,
        location: user.location,
        age: user.age,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao atualizar o perfil', error });
  }
};
