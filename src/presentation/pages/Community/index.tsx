import { Table } from '@components/server/Table';

import styles from './styles.module.scss';

const array = [
  { id: 1, name: 'João Silva', office: 'Tech Designer', locale: 'SP' },
  { id: 2, name: 'Maria Silva', office: 'Tech Designer', locale: 'MG' },
  { id: 3, name: 'Fernanda Silva', office: 'Designer', locale: 'SP' },
  { id: 4, name: 'Marcelo Silva', office: 'Tech Lead', locale: 'RJ' },
  { id: 5, name: 'Caio Silva', office: 'Admin', locale: 'SP' },
];

export function Community() {
  console.log('Page Community');

  return (
    <div className={styles.container}>
      <Table array={array} />
    </div>
  );
}
