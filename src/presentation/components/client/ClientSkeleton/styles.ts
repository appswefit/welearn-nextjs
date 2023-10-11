import styled from 'styled-components';

export const Td = styled.td`
  background-color: ${({ theme }) => theme.colors.DARK_100};
  height: 300px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 2px;
  animation: loading 0.8s infinite alternate;

  border: none !important;

  @keyframes loading {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Span = styled.td`
  background-color: ${({ theme }) => theme.colors.DARK_100};
  height: 300px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 2px;
  animation: loading 0.8s infinite alternate;

  border: none !important;

  @keyframes loading {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
`;
