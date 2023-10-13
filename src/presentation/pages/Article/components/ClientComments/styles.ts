import styled, { css } from 'styled-components';

const common = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container = styled.div``;

export const Row = styled.div`
  ${common}
  align-items: center;

  padding: ${({ theme }) => theme.spacing['3x']} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.CYAN_500};
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.NEUTRAL_50};
`;

export const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing['4x']};
  width: 100%;
  ${common}
  align-items: end;

  div {
    flex: 1;
    margin-right: 10px;
  }
`;

export const BttSubmit = styled.button``;
