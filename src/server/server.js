const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do CORS (ajuste a origem para o seu frontend React)
app.use(cors({
  origin: 'http://localhost:3000' // Substitua pela URL do seu frontend React
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para lidar com o envio do formulário
app.post('/enviar-email', (req, res) => {
  const { nome, email, mensagem } = req.body;

  // Criar um transporter (configuração do serviço de email)
  // Substitua pelos seus dados reais
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Ex: 'gmail', 'outlook'
    auth: {
      user: 'rferreirasp20@gmail.com',
      pass: 'Vivo@2024'
    }
  });

  // Opções do email
  const mailOptions = {
    from: 'seu_email@gmail.com',
    to: 'rferreirasp20@gmail.com',
    subject: `Novo contato de ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`
  };

  // Enviar o email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erro ao enviar email.');
    } else {
      console.log('Email enviado: ' + info.response);
      res.send('Email enviado com sucesso!');
    }
  });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
