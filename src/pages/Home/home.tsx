import React from 'react';
import { Container, Footer, Header, MainPanel, Middle } from './styles';

export const Home = () => {
  return (
    <Container>
      <MainPanel>
        <Header>
          <button>Acessar meu Painel</button>
        </Header>
        <Middle>
          <h1>
            A mais completa plataforma de gerenciamento de vendas online para
            supermercado
          </h1>
          <button>Solicitar Demonstração</button>
        </Middle>
      </MainPanel>
      <Footer>
        <div>
          <p>Suporte e ouvidoria prioritário</p>
          <h1>Ao CLiente</h1>
        </div>
        <div>
          <p>Segurança</p>
          <h1>Em todas as etapas</h1>
        </div>
      </Footer>
    </Container>
  );
};
