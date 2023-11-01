'use client';

import { ClientErrorComponent } from '@components/client/ClientErrorComponent';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return <ClientErrorComponent error={error} reset={reset} />;
}
