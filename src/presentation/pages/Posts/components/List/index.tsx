import { Suspense } from 'react';

import Post from '../Post';
import LoadingPost from '../Post/loading';
import Loading from './loading';

const fetchList = async () => {
  const res = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts');
  await new Promise(resolve => setTimeout(resolve, 2000));
  return res.json();
};

const List = async () => {
  const response = await fetchList();
  console.log({ response });
  return (
    <ul>
      {response &&
        response?.blogs?.map(blog => (
          <li key={blog.id}>
            <Suspense fallback={<LoadingPost />}>
              <Post id={blog.id} />
            </Suspense>
          </li>
        ))}
    </ul>
  );
};

export default List;
