import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
`;

export const Components = styled.section`
  padding: 1rem 1.8rem;
  flex: 1;
`;

export const FieldComponents = styled.article`
  padding: 1.8rem 0;
`;

export const ContainerSideBar = styled.aside`
  width: 280px;
  background: var(--side-bar);
  height: 100vh;
  padding: 10rem 1.8rem 0 0;
`;

export const FieldText = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem 1.8rem;
    transition: border 0.2s;
    color: var(--button-text);
    span {
      margin-left: 1rem;
    }

    &:hover {
      border-left: 5px solid #737373;
    }
  }
`;
