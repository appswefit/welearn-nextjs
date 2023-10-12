import { Table } from '@components/server/Table';

import { ICommunity } from './community.types';
import styles from './styles.module.scss';

export async function Community() {
  console.log('Page Community');

  const response = await fetch('http://localhost:4000/communities');
  const array: Array<ICommunity> = await response.json();

  return (
    <div className={styles.container}>
      <Table array={array} />
    </div>
  );
}
