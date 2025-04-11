--API--

Base URL: http://localhost:5000/api

------------------------------------------------------------------

🔐 POST /auth/register
Cria um novo utilizador.

Request Body (JSON):

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123",
  "avatar": "https://link-do-avatar.jpg",
  "location": "Lisboa",
  "gender": "Masculino"
}

Response (201 Created):

{
  "message": "Utilizador registado com sucesso",
  "user": {
    "id": "abc123",
    "name": "João Silva",
    "email": "joao@email.com"
  }
}

------------------------------------------------------------------

🔑 POST /auth/login
Autentica um utilizador.

Request Body (JSON):

{
  "email": "joao@email.com",
  "password": "senha123"
}

Response (200 OK):

{
  "message": "Login bem-sucedido",
  "token": "jwt_token_aqui",
  "user": {
    "id": "abc123",
    "name": "João Silva",
    "email": "joao@email.com",
    "avatar": "https://link-do-avatar.jpg",
    "location": "Lisboa",
    "gender": "Masculino"
  }
}

------------------------------------------------------------------


👤 User Routes
🔍 GET /users?name=João Silva
Procura um utilizador pelo nome.


OBRIGATORIO-(name: Nome completo do utilizador)

Response (200 OK):

{
  "_id": "abc123",
  "name": "João Silva",
  "email": "joao@email.com",
  "avatar": "https://link-do-avatar.jpg",
  "location": "Lisboa",
  "gender": "Masculino"
}

Erros:

400: Nome não fornecido

404: Utilizador não encontrado