import React, { useState } from 'react';
import { TableComponent } from '../Table/table';
import { Button, Container } from './styles';

export const Orders = () => {
  const [selectedButton, setSelectedButton] = useState(false);

  function selectButton() {
    setSelectedButton(true);
  }

  return (
    <Container>
      <h1>Pedidos</h1>

      <div>
        <Button selected={selectedButton} onClick={selectButton}>
          Todos
        </Button>
        <Button selected={selectedButton} onClick={selectButton}>
          Pedidos
        </Button>
      </div>

      <TableComponent />
    </Container>
  );
};
