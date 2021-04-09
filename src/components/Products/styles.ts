import styled from 'styled-components';

export const Container = styled.main`
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    h1 {
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--info-text);
    }
    a {
      text-decoration: none;
      color: var(--blue-light);
    }
  }

  hr {
    margin: 2.5rem 0;
    color: var(--sub-title);
  }
`;

export const ImportArchive = styled.section`
  h1 {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--info-text);
  }
  label {
    display: inline-block;
    margin: 1.5rem 0;
    background: var(--sub-title);
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  p {
    line-height: 3;
    color: var(--text-title);

    a {
      text-decoration: none;
      color: var(--blue-light);
    }
  }
`;
