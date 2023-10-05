import { ReactNode } from 'react';

import { LayoutPublic } from '@components/server/LayoutPublic';

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return <LayoutPublic>{children}</LayoutPublic>;
}
