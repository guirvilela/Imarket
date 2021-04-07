import styled from 'styled-components';

import Background from '../../assets/backgroundHome.png';

export const Container = styled.main``;

export const MainPanel = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 2rem 7.8rem 4rem;
  width: 100%;
`;
export const Header = styled.header`
  text-align: end;
  button {
    border: 0;
    text-decoration: none;
    font-size: 1rem;
    color: var(--home-title);
    background: var(--text-title);
    padding: 1rem;
    border-radius: 0.5rem;
    transition: filter 0.2s;
    text-transform: uppercase;
    font-weight: 500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const Middle = styled.section`
  margin-top: 3rem;
  h1 {
    max-width: 612px;
    font-size: 3rem;
    color: var(--home-title);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 4rem;
  }

  button {
    background: var(--home-title);
    color: var(--blue-light);
    font-weight: 500;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 4rem;
    font-size: 1.125rem;
    transition: filter 0.2s;
    text-transform: uppercase;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      filter: brightness(0.92);
    }
  }
`;

export const Footer = styled.footer`
  background: var(--text-title);
  display: flex;
  padding: 2rem 7.8rem;

  div {
    & + div {
      margin-left: 2.5rem;
    }

    p {
      color: var(--home-title);
      margin-bottom: 0.5rem;
    }
    h1 {
      color: var(--blue-light);
      text-transform: uppercase;
    }
  }
`;
