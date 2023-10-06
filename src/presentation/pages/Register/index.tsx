import { ClientButton, ClientTextInput } from '@components/index';

import styles from './styles.module.scss';

export function Register() {
  console.log('Page Register');

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ClientTextInput label="Título" />
        <ClientTextInput isTextArea label="Texto" />
      </div>

      <footer className={styles.footer}>
        <ClientButton>Cadastrar</ClientButton>
      </footer>
    </div>
  );
}
