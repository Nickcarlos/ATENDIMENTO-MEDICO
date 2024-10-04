import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importando o arquivo CSS

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '12345') {
      localStorage.setItem('auth', 'true'); // Armazena a autenticação no localStorage
      navigate('/formulario'); // Redireciona para o formulário
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <div className="login-container">
      <img
        src="/images/logo-aplicare.png"
        alt="Logo Aplicare"
        className="login-logo"
      />
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label>Usuário:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="form-group">
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;