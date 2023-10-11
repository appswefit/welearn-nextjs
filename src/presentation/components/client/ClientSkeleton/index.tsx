'use client';

import { Td, Span } from './styles';

interface ClientSkeletonProps {
  colSpan?: number;
}

export function ClientSkeleton({ colSpan }: ClientSkeletonProps) {
  if (colSpan) {
    return <Td colSpan={colSpan} />;
  }

  return <Span />;
}
