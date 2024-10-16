import React from 'react';

interface TituloProps {
  texto: string;
}

const Titulo: React.FC<TituloProps> = ({ texto }) => {
  return (
    <h1 className="text-4xl font-bold text-center text-gray-800">{texto}</h1>
  );
};

export default Titulo;

