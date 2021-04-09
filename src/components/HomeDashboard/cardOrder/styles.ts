import styled from 'styled-components';

export const Card = styled.section`
  width: 250px;
  padding: 1rem;
  background: #fefefe;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h2 {
    font-size: 1.125rem;
    font-weight: 400;
    color: var(--text-title);
  }
  h3 {
    font-size: 0.9rem;
    font-weight: 400;
    color: var(--text-title);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;

    span,
    p {
      color: var(--info-text);
      font-size: 1.125rem;
    }
  }
`;
