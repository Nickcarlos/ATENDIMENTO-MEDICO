import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import AtendimentoForm from './components/AtendimentoForm';

const App = () => {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Acessa AtendimentoForm apenas se estiver autenticado */}
        <Route path="/formulario" element={isAuthenticated ? <AtendimentoForm /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;