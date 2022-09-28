import styles from './ListTasks.module.css';

import * as Checkbox from '@radix-ui/react-checkbox';
import { Trash, Check } from 'phosphor-react';
import { PropsTask } from '../App';

interface Props {
  todoList: PropsTask[];
  onDelete: (taskId: string) => void;
  onSelectedTask: (taskId: string) => void;
}

export function ListTasks({ todoList, onDelete, onSelectedTask }: Props) {
  function handleClickInDeleteTask(taskId: string) {
    onDelete(taskId);
  }

  function handleClickInChecked(taskId: string) {
    onSelectedTask(taskId);
  }

  return (
    <>
      {todoList.map(({ id, taskList, isCompleted }) => (
        <div className={styles.container} key={id}>
          <div className={styles.divCheck}>
            <Checkbox.Root
              onCheckedChange={() => handleClickInChecked(id)}
              className={
                !isCompleted ? styles.checkbox : styles.checkboxChecked
              }
            >
              <Checkbox.Indicator>
                <Check size={16} />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>
          <p
            className={
              !isCompleted ? styles.textTask : styles.textTaskCompleted
            }
          >
            {taskList}
          </p>
          <button
            className={styles.buttonDelete}
            onClick={() => handleClickInDeleteTask(id)}
          >
            <Trash size={20} />
          </button>
        </div>
      ))}
    </>
  );
}
