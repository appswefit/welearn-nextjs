import styled from 'styled-components';

import { ClientSkeleton } from '@components/index';

export const TitleLoading = styled(ClientSkeleton)`
  width: 80%;
  height: 40px;
  margin-bottom: ${({ theme }) => theme.spacing['5x']};
`;

export const ArticleLoading = styled(ClientSkeleton)`
  width: 100%;
  height: 300px;
  margin-bottom: ${({ theme }) => theme.spacing['7x']};
`;

export const CommentArticle = styled(ClientSkeleton)`
  width: 100%;
  height: 30px;
  margin-bottom: ${({ theme }) => theme.spacing['3x']};
`;
