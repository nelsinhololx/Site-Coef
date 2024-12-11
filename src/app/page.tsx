import Navbar from './components/Navbar';  // Supondo que a Navbar seja um componente separado

export default function Home() {
  return (
    <div>
      <Navbar /> {/* Navbar que usa a imagem */}
      <h1>Bem-vindo ao meu site!!!!!!</h1>
      {/* Outros conteúdos da página */}
    </div>
  );
}