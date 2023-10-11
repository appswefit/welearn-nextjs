import { images } from '@assets/index';

import { ClientActiveLink } from '../../client/ClientActiveLink';
import styles from './styles.module.scss';

interface IGetNameBlog {
  id: number;
  name: string;
}

export async function Header() {
  const response = await fetch('http://localhost:4000/nameBlog');
  const { name }: IGetNameBlog = await response.json();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ClientActiveLink activeClassName={styles.active} href="/community">
          <span>Comunidade</span>
        </ClientActiveLink>
        <ClientActiveLink activeClassName={styles.active} href="/article">
          <span>Artigos</span>
        </ClientActiveLink>
        <ClientActiveLink activeClassName={styles.active} href="/register">
          <span>Cadastro de artigo</span>
        </ClientActiveLink>
      </nav>
      <div className={styles.row}>
        <h2 className={styles.title}>{name}</h2>
        <img src={images.logoIcon} alt="logo wefit" />
      </div>
    </header>
  );
}
