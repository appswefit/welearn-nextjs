'use client';

import styles from './page.module.scss';

const Welcome = () => {
  console.log('Page Welcome');
  return <span className={styles.titulo}>Bem vindo</span>;
};

export default Welcome;
