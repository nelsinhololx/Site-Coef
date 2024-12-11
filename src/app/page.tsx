import React from 'react';
import Navbar from 'site-coef\src\app\components\NavItem\index.css';  // Corrigindo o caminho

export default function Home() {
  return (
    <div>
      <Navbar /> {/* Navbar que usa a imagem */}
      <h1>Bem-vindo ao meu site!!!!!!</h1>
      {/* Outros conteúdos da página */}
    </div>
  );
}