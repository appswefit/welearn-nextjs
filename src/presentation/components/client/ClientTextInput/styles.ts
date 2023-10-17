import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2x']};
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.NEUTRAL_50};
`;

export const Wrapper = styled.div`
  ${({ theme }) =>
    theme &&
    css`
      display: flex;
      flex: ${theme.elevation[1]};
      flex-direction: row;
      align-items: center;
      gap: ${theme.spacing['1x']};
      background-color: ${theme.colors.NEUTRAL_50};
      border-radius: 4px;
    `}
`;

export const Input = styled.input`
  height: 28px;
  width: 100%;
  text-indent: 8px;
  border: none;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_50};
  outline: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 4px;
  padding: 8px 8px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_50};
  outline: none;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  resize: vertical;
`;

export const Clean = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.DARK_200};
  margin-right: ${({ theme }) => theme.spacing['2x']};
  cursor: pointer;
  padding: 1px 4px;
  border: 1px solid ${({ theme }) => theme.colors.DARK_200};
  border-radius: 100%;
`;
