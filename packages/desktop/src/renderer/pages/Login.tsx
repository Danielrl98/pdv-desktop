import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // autenticar e navegar
    navigate('/');
  }

  async function handleLogin() {
    // try {
    //   const response = await window.electron?.ipcRenderer.logi2n('login', {
    //     email: 'email@email.com',
    //     password: '123456',
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.error('Erro no login:', error);
    // }
  }

  return (
    <div
      style={{ maxWidth: 360, margin: '56px auto', fontFamily: 'sans-serif' }}
    >
      <h1>Login</h1>
      <div onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
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
      </div>
      <p style={{ marginTop: 12 }}>
        Não tem conta? <Link to="/register">Registre-se</Link>
      </p>
    </div>
  );
}
