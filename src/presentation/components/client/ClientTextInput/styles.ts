import styled from 'styled-components';

interface CleanProps {
  isTextarea?: boolean;
}

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
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  height: 26px;
  flex: 1;
  border-radius: 4px;
  text-indent: 6px;
  padding: 8px 0;

  outline: none;
`;

export const TextArea = styled.textarea`
  min-height: 250px;
  width: 100%;
  border-radius: 4px;
  text-indent: 6px;
  padding: 8px 0;

  outline: none;
`;

export const Clean = styled.span.withConfig({
  shouldForwardProp: prop => !['isTextarea'].includes(prop),
})<CleanProps>`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.DARK_200};
  position: absolute;
  top: ${({ isTextarea }) => (isTextarea ? 6 : 50)}%;
  right: 12px;
  transform: translateY(-50%);
  cursor: pointer;

  padding: 1px 4px;
  border: 1px solid ${({ theme }) => theme.colors.DARK_200};
  border-radius: 100%;
`;
