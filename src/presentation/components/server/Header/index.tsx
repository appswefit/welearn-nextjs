import { images } from '@assets/index';

import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ActiveLink activeClassName={styles.active} href="/community">
          <span>Comunidade</span>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/article">
          <span>Artigo</span>
        </ActiveLink>
        <ActiveLink activeClassName={styles.active} href="/register">
          <span>Cadastro de artigo</span>
        </ActiveLink>
      </nav>
      <div className={styles.row}>
        <h2 className={styles.title}>Blog Wefit</h2>
        <img src={images.logoIcon} alt="logo wefit" />
      </div>
    </header>
  );
}
