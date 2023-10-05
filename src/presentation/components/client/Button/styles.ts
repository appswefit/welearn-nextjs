import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) =>
    theme &&
    css`
      width: 260px;
      height: 64px;
      border-radius: 20px;
      background-color: ${theme.colors.YELLOW_500};

      color: ${theme.colors.NEUTRAL_200};
      font-size: 14px;
      font-weight: 700;
    `}
`;
