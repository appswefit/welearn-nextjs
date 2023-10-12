import styled from 'styled-components';

export const StyledArticle = styled.article`
  width: 65%;
  margin: 0 auto;
  margin-top: 16px;

  text-align: justify;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.YELLOW_500};

  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-weight: 12px;
  color: ${({ theme }) => theme.colors.NEUTRAL_50};
  margin-bottom: 22px;
`;

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.NEUTRAL_50};
`;
