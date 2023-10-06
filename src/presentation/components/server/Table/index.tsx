import styles from './styles.module.scss';

interface TableProps {
  array: Array<{ id: number; name: string; office: string; locale: string }>;
}

export function Table({ array }: TableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.bdRightNone}>Nome</th>
          <th className={styles.bdLeftRightNone}>Cargo</th>
          <th className={styles.bdLeftNone}>Estado</th>
        </tr>
      </thead>

      <tbody>
        {array.map(item => (
          <tr key={item.id}>
            <td className={styles.bdRightNone}>{item.name}</td>
            <td className={styles.bdLeftRightNone}>{item.office}</td>
            <td className={styles.bdLeftNone}>{item.locale}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
