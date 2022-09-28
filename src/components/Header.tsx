import rocket from '../assets/icons/logoRocket.svg';
import styles from './Header.module.css';

export function Header() {
  return (
    <div className={styles.container}>
      <img src={rocket} alt="" />
    </div>
  );
}
