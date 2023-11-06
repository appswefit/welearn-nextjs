import styled, { css } from 'styled-components';

interface ToggleProps {
  isToggled: boolean;
}

export const ToggleContainer = styled.div.withConfig({
  shouldForwardProp: prop => !['isToggled'].includes(prop),
})<ToggleProps>`
  ${({ theme, isToggled }) =>
    theme &&
    css`
      width: 50px;
      height: 30px;
      background: ${isToggled ? theme.colors.YELLOW_400 : theme.colors.NEUTRAL_200};
      border-radius: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: background 0.3s ease;
    `}
`;

export const ToggleCircle = styled.div.withConfig({
  shouldForwardProp: prop => !['isToggled'].includes(prop),
})<ToggleProps>`
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transform: translateX(${props => (props.isToggled ? '20px' : '0')});
  transition: transform 0.3s ease;
  margin-left: 5px;
`;
