import { Table } from '@components/server/Table';

import { ICommunity } from './community.types';
import styles from './styles.module.scss';

export async function Community() {
  console.log('Page Community');

  const response = await fetch('http://localhost:4000/communities', {
    next: {
      revalidate: 60 * 60 * 24, // 24 horas
    },
  });
  const array: Array<ICommunity> = await response.json();

  if (!array) {
    throw new Error('Erro ao buscar dados da comunidade...');
  }

  return (
    <div className={styles.container}>
      <Table array={array} />
    </div>
  );
}
