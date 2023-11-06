import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) =>
    theme &&
    css`
      min-width: 120px;
      height: 46px;
      border: none;
      border-radius: 8px;
      background-color: ${theme.colors.YELLOW_500};
      color: ${theme.colors.BLACK};
      padding: ${theme.spacing['1x']};
      font-size: 14px;
      font-weight: 700;

      &:hover {
        background-color: ${theme.colors.YELLOW_400};
      }

      &:disabled {
        background-color: ${theme.colors.NEUTRAL_200};
        color: ${theme.colors.DARK_100};
      }
    `}
`;
