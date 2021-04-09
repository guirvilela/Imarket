import React from 'react';
import { TableComponent } from '../Table/table';
import { Container, ImportArchive } from './styles';

export const Products = () => {
  return (
    <Container>
      <nav>
        <h1>Produtos</h1>
        <a href="#">Adicionar novo +</a>
      </nav>

      <TableComponent />

      <hr />

      <ImportArchive>
        <h1>Importação</h1>

        <label htmlFor="file">Esolher um arquivo</label>

        <input id="file" type="file" placeholder="teste" hidden />

        <p>
          Com a importação de arquivo você pode atualizar os valores dos seus
          produtos de forma mais rápida e prática.
          <br /> Clique <a href="#"> aqui</a> para obter o layout de importação.
        </p>
      </ImportArchive>
    </Container>
  );
};
