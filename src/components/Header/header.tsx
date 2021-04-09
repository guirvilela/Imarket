import React, { useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import logOutIcon from '../../assets/header/logOut.svg';
import notificationIcon from '../../assets/header/notification.svg';
import { Home } from '../../pages/Home/home';
import { Container } from './styles';

export const Header = () => {
  const history = useHistory();

  const handleLogout = useCallback(() => history.push('/'), []);

  return (
    <Container>
      <img src={notificationIcon} alt="Notificações" />
      <img src={logOutIcon} alt="Logout" onClick={handleLogout} />
    </Container>
  );
};
