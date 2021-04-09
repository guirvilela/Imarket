import React from 'react';
import logOutIcon from '../../assets/header/logOut.svg';
import notificationIcon from '../../assets/header/notification.svg';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <img src={notificationIcon} alt="Notificações" />
      <img src={logOutIcon} alt="Logout" />
    </Container>
  );
};
