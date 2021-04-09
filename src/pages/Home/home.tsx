import React from 'react';
import {
  Container,
  Footer,
  Header,
  MainPanel,
  Middle,
  Promotions,
} from './styles';

import itsSale from '../../assets/itSale.png';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Container>
      <MainPanel>
        <Header>
          <Link to="/dashboard/home">Acessar meu Painel</Link>
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
      <Promotions>
        <div>
          <h1>Promoções</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ducimus
            laboriosam consequuntur iusto ea placeat. Doloremque vel laudantium
            similique et quod. Earum quisquam nemo alias a ut doloribus pariatur
            assumenda!
          </p>
        </div>

        <img src={itsSale} alt="SaleImage" />
      </Promotions>
    </Container>
  );
};
