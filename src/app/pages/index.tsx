import React from 'react';
import Titulo from '../components/Titulo';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Titulo texto="Bem-vindo à Minha Página!" />
      {}
    </div>
  );
};

export default Home;
