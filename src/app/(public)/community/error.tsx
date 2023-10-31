/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ClientErrorComponent } from '@components/client/ClientErrorComponent';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return <ClientErrorComponent error={error} reset={reset} />;
}
