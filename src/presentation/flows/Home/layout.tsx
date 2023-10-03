import { Description, Title } from './styles';

interface HomeLayoutProps {
  nameBlog: string;
}

export function HomeLayout({ nameBlog }: HomeLayoutProps) {
  return (
    <>
      <Title>Blog {nameBlog}</Title>
      <Description>My App Next13</Description>
    </>
  );
}
