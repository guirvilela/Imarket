import React from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AiFillHome, AiFillFire, AiFillSchedule } from 'react-icons/ai';
import { BsFillArchiveFill, BsFillPersonFill } from 'react-icons/bs';

import { Components, Container, FieldComponents } from './styles';
import { ContainerSideBar, FieldText } from './styles';
import { Header } from '../../components/Header/header';
import { HomeDashboard } from '../../components/HomeDashboard/homeDashboard';
import { Promotions } from '../../components/Promotions/promotions';
import { Products } from '../../components/Products/products';
import { Clients } from '../../components/Clients/clients';
import { Orders } from '../../components/Orders/order';

export const Dashboard = () => {
  const routes = [
    {
      path: '/dashboard/home',
      exact: true,
      main: () => <HomeDashboard />,
    },
    {
      path: '/dashboard/promocoes',

      main: () => <Promotions />,
    },
    {
      path: '/dashboard/produtos',

      main: () => <Products />,
    },
    {
      path: '/dashboard/clientes',
      main: () => <Clients />,
    },
    {
      path: '/dashboard/pedidos',
      main: () => <Orders />,
    },
  ];
  return (
    <Router>
      <Container>
        <ContainerSideBar>
          <FieldText>
            <Link to="/dashboard/home">
              <AiFillHome size={20} />
              <span>Início</span>
            </Link>
            <Link to="/dashboard/promocoes">
              <AiFillFire size={20} />
              <span>Promoções</span>
            </Link>
            <Link to="/dashboard/produtos">
              <BsFillArchiveFill size={20} />
              <span>Produtos</span>
            </Link>
            <Link to="/dashboard/clientes">
              <BsFillPersonFill size={20} />
              <span>Clientes</span>
            </Link>
            <Link to="/dashboard/pedidos">
              <AiFillSchedule size={20} />
              <span>Pedidos</span>
            </Link>
          </FieldText>

          <Switch>
            {routes.map((route, index) => {
              <Route key={index} path={route.path} exact={route.exact}></Route>;
            })}
          </Switch>
        </ContainerSideBar>

        <Components>
          <Header></Header>
          <FieldComponents>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </FieldComponents>
        </Components>
      </Container>
    </Router>
  );
};
