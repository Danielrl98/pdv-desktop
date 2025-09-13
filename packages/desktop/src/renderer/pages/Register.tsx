import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // registrar e navegar para login
    navigate('/login');
  }

  return (
    <div
      style={{ maxWidth: 360, margin: '56px auto', fontFamily: 'sans-serif' }}
    >
      <h1>Registro</h1>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Criar conta</button>
      </form>
      <p style={{ marginTop: 12 }}>
        Já tem conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
}
