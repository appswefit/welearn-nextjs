import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['7x']};
`;

export const Span = styled.span`
  ${({ theme }) =>
    theme &&
    css`
      font-weight: 700;
      font-size: 42px;
      color: ${theme.colors.ERROR};

      padding: ${theme.spacing['4x']};
      border-radius: 50%;
      border: 4px solid ${theme.colors.ERROR};
      margin-bottom: ${theme.spacing['2x']};
    `}
`;
