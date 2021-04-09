import styled, { css } from 'styled-components';

export const Container = styled.main`
  h1 {
    font-size: 1.3rem;
    font-weight: 400;
    color: var(--info-text);
  }
  div {
    margin: 1.5rem 0;
    background: var(--side-bar);
    width: 20%;
    display: flex;
    border-radius: 0.5rem;

    button {
    }
  }
`;

interface ButtonProps {
  selected?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: transparent;
  border: 0;
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  position: relative;
  color: #999999;

  &:focus {
    color: var(--text-title);
  }
  /* 
  ${(props) => props.selected && css``} */

  & + button::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 70%;
    left: 0;
    top: 19%;
    background: var(--sub-title);
  }
`;
