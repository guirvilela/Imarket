import React from 'react';
import { TableComponent } from '../Table/table';
import { Container } from './styles';

export const Clients = () => {
  return (
    <Container>
      <h1>Clientes</h1>

      <p>
        Estes são os clientes que já efetuaram algum pedido na sua loja. <br />
        Eles são incluídos de forma automática e não é possível adicionar um
        manual.
      </p>

      <TableComponent />
    </Container>
  );
};
