import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  img + img {
    margin-left: 16px;
  }

  img {
    transition: fitler 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`;
