import { Suspense } from 'react';

import List from './components/List';
import Loading from './components/List/loading';

export function Posts() {
  console.log('Page Article');

  return (
    <main>
      <span>Posts</span>
      <Suspense fallback={<Loading />}>
        <List />
      </Suspense>
    </main>
  );
}
