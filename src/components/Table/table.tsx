import React from 'react';
import { Table } from './styles';

export const TableComponent = () => {
  return (
    <Table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Descrição</td>
          <td>Valor</td>
          <td>Última Alteração</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Produto totalmente de alta qualidade</td>
          <td>R$ 100,00</td>
          <td>30/02/2021</td>
        </tr>
        <tr>
          <td>01</td>
          <td>Descrição 1</td>
          <td>R$ 100,00</td>
          <td>30/02/2021</td>
        </tr>
        <tr>
          <td>01</td>
          <td>Descrição 1</td>
          <td>R$ 100,00</td>
          <td>30/02/2021</td>
        </tr>
        <tr>
          <td>01</td>
          <td>Descrição 1</td>
          <td>R$ 100,00</td>
          <td>30/02/2021</td>
        </tr>
      </tbody>
    </Table>
  );
};
