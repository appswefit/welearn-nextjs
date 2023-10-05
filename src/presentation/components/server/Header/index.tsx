import Link from 'next/link';

import { images } from '@assets/index';

import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/community">Comunidade</Link>
        <Link href="/article">Artigo</Link>
        <Link href="/register">Cadastro de artigo</Link>
      </nav>
      <div className={styles.row}>
        <h2 className={styles.title}>Blog Wefit</h2>
        <img src={images.logoIcon} alt="logo wefit" />
      </div>
    </header>
  );
}
