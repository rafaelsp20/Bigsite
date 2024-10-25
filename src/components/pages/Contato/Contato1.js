import React, { useState } from "react";
import Header from "../../Header/Header";
import "../../../global1.css";
import './Contato.css';

//ContatoForm

function ContatoForm() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/enviar-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, email, mensagem })
      });

      if (response.ok) {
        alert('Email enviado com sucesso!');
        // Limpar o formulário
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        alert('Erro ao enviar email.');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar email.');
    }
  };

  return (<>  

<div className="conteudo_principal">
    <Header />   
    <form className="contato-form" data-netlify="true" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          //name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
      </div>
      {/* Outros campos do formulário */}
      <button type="submit">Enviar</button>
    </form>
    </div>   
</> );
}

export default ContatoForm;
