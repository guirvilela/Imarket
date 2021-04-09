import styled from 'styled-components';

export const Container = styled.main`
  padding: 0.5rem 1.8rem;
  border-left: 5px solid #8b86a2;

  nav {
    display: flex;
    margin-bottom: 1.5rem;
    h1 {
      font-weight: 400;
      font-size: 1.2rem;
      color: var(--info-text);
      margin-right: 5rem;
    }
    a {
      text-decoration: none;
      color: var(--blue-light);
    }
  }
`;
export const ContainerCards = styled.aside`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
