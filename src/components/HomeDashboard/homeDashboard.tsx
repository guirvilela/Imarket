import React from 'react';
import { Cards } from './cardOrder/cardOrder';
import { Container, ContainerCards } from './styled';

export const HomeDashboard = () => {
  return (
    <Container>
      <nav>
        <h1>Pedidos pendentes</h1>
        <a href="#">ver mais</a>
      </nav>

      <ContainerCards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </ContainerCards>
    </Container>
  );
};
