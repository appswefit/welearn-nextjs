import { images } from '@assets/index';

import styles from './styles.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.img} src={images.logoWefit} alt="logo wefit" />
      <div>
        <span>Endereço</span>
        <span>
          Av. Brig. Faria Lima, 1853, 1º Andar <br />- Jardim Paulistano São Paulo, SP - Brasil
        </span>
      </div>
    </footer>
  );
}
