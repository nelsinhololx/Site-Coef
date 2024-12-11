import Image from 'next/image';

const Page = () => {
  return (
    <div>
      {/* Usando a imagem do Next.js */}
      <Image
        src="/logo-nav.png"  // O caminho começa com / para indicar a pasta public
        alt="Logo de navegação"
        width={200}  // Largura desejada
        height={50}  // Altura desejada
      />
    </div>
  );
};

export default Page;