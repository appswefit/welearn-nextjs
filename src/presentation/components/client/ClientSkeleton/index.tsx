'use client';

import { Td, Span } from './styles';

interface ClientSkeletonProps {
  widthPct?: number;
  heightPx?: number;
  colSpan?: number;
}

export function ClientSkeleton({ colSpan, heightPx, widthPct, ...rest }: ClientSkeletonProps) {
  if (colSpan) {
    return <Td colSpan={colSpan} heightPx={heightPx} widthPct={widthPct} {...rest} />;
  }

  return <Span heightPx={heightPx} widthPct={widthPct} {...rest} />;
}
