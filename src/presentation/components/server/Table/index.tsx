import { ICommunity } from 'src/presentation/pages/Community/community.types';

import { ClientSkeleton } from '@components/client/ClientSkeleton';

import styles from './styles.module.scss';

interface TableProps {
  array: Array<ICommunity>;
  isLoading?: boolean;
}

export function Table({ array, isLoading }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.bdRightNone}>Nome</th>
          <th className={styles.bdLeftRightNone}>Cargo</th>
          <th className={styles.bdLeftNone}>Estado</th>
        </tr>
      </thead>

      {isLoading ? (
        <tbody>
          <tr>
            <ClientSkeleton colSpan={3} />
          </tr>
        </tbody>
      ) : (
        <tbody>
          {array.map(item => (
            <tr key={item.id}>
              <td className={styles.bdRightNone}>{item.name}</td>
              <td className={styles.bdLeftRightNone}>{item.office}</td>
              <td className={styles.bdLeftNone}>{item.locale}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
