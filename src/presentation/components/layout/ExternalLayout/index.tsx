import { ReactNode } from 'react';

import { Container } from './styles';

interface ExternalLayoutProps {
  children: ReactNode;
}

export const ExternalLayout = ({ children }: ExternalLayoutProps) => {
  return <Container>{children}</Container>;
};
