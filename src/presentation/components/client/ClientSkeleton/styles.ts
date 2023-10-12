import styled, { css } from 'styled-components';

export const Td = styled.td`
  ${({ theme }) =>
    theme &&
    css`
      background-color: ${theme.colors.DARK_100};
      height: 300px;
      width: 100%;
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
    `}
`;

export const Span = styled.span`
  ${({ theme }) =>
    theme &&
    css`
      display: block;
      height: 300px;
      width: 100%;
      background-color: ${theme.colors.DARK_100};
      border-radius: 4px;
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
    `}
`;
