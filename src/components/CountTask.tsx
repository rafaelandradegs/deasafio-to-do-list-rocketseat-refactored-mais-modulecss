import { PropsTask } from '../App';
import styles from './CountTask.module.css';

interface Props {
  todoList: PropsTask[];
}

export function CountTask({ todoList }: Props) {
  console.log(todoList);
  return (
    <div className={styles.container}>
      <p className={styles.newTask}>
        Tarefas criadas{' '}
        <span className={styles.spanCount}>{todoList.length}</span>
      </p>
      <p className={styles.fineshedTask}>
        Concluidas{' '}
        <span className={styles.spanCount}>
          {`${todoList.filter(task => task.isCompleted).length} de ${
            todoList.length
          }`}
        </span>
      </p>
    </div>
  );
}
