import styled from 'styled-components';

export const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.YELLOW_500};
`;

export const Description = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.YELLOW_500};
`;
