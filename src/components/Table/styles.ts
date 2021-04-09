import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;

  td {
    padding: 0.8rem;
  }

  thead {
    td {
      color: var(--text-title);
      font-size: 1rem;
      font-weight: 500;

      &:nth-child(2) {
        width: 50%;
      }
    }
  }

  tbody {
    tr:nth-child(odd) {
      background-color: #f7f7f7;
    }
    td {
      padding: 0.8rem;
      color: var(--text-title);
      &:first-child {
        font-weight: 500;
      }
    }
  }
`;
