'use client';

import { Td, Span } from './styles';

interface ClientSkeletonProps {
  colSpan?: number;
}

export function ClientSkeleton({ colSpan, ...rest }: ClientSkeletonProps) {
  if (colSpan) {
    return <Td colSpan={colSpan} {...rest} />;
  }

  return <Span {...rest} />;
}
