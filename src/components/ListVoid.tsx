import styles from './ListVoid.module.css';
import clipboard from '../assets/icons/clipboard.svg';

export function ListVoid() {
  return (
    <div className={styles.container}>
      <img className={styles.imgClipboard} src={clipboard} alt="" />

      <p className={styles.firstParagraph}>
        Você ainda não tem tarefas cadastradas
      </p>
      <p className={styles.secundParagraph}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
