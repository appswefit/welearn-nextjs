import { ReactNode } from 'react';

import { Container } from './styles';

interface InternalLayoutProps {
  children: ReactNode;
}

export const InternalLayout = ({ children }: InternalLayoutProps) => {
  return <Container>{children}</Container>;
};
