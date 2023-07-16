import React, { useState, useEffect } from 'react';

const Home = () => {
  const [message, setMessage] = useState('Carregando...');

  useEffect(() => {
    // Função para buscar dados da API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/customEndpoint');
        const jsonData = await response.json();
        setMessage(jsonData.message);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao meu site!</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
