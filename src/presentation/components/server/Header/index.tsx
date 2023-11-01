import { images } from '@assets/index';

import { ClientActiveLink } from '../../client/ClientActiveLink';
import styles from './styles.module.scss';

interface IGetNameBlog {
  id: number;
  name: string;
}

export async function Header() {
  const response = await fetch('http://localhost:4000/nameBlog', {
    // para cada user diferente ele faz uma nova requisição, ou para cada vez que fizer reload na tela ou a tela hibernar
    cache: 'no-store',
  });

  const { name }: IGetNameBlog = await response.json();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ClientActiveLink activeClassName={styles.active} href="/community">
          <span>Comunidade</span>
        </ClientActiveLink>
        <ClientActiveLink activeClassName={styles.active} href="/article">
          <span>Artigo</span>
        </ClientActiveLink>
        <ClientActiveLink activeClassName={styles.active} href="/edit">
          <span>Editar artigo</span>
        </ClientActiveLink>
      </nav>
      <div className={styles.row}>
        <h2 className={styles.title}>{name ?? '--'}</h2>
        <img src={images.logoIcon} alt="logo wefit" />
      </div>
    </header>
  );
}
