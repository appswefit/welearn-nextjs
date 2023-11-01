import styled from 'styled-components';

import { ClientSkeleton } from '@components/index';

export const CommentArticle = styled(ClientSkeleton)`
  width: 100%;
  height: 30px;
  margin-bottom: ${({ theme }) => theme.spacing['3x']};
`;
