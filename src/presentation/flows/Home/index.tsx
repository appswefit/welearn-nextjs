import { getNameBlog } from 'src/mock';

import { HomeLayout } from './layout';

export async function Home() {
  console.log('Page Home');
  const { name } = await getNameBlog();
  return <HomeLayout nameBlog={name} />;
}
