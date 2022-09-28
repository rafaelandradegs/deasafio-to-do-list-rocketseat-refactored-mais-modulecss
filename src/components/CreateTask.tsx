import React from 'react';

import { PlusCircle } from 'phosphor-react';
import styles from './CreateTask.module.css';

interface Props {
  onAddTask: (task: string) => void;
}

export function CreateTask({ onAddTask }: Props) {
  const [task, setTask] = React.useState<string>('');

  function handleClickInCreate() {
    onAddTask(task);
    setTask('');
  }

  function registerTask(
    event: React.ChangeEvent<HTMLInputElement> & React.KeyboardEvent,
  ) {
    setTask(event?.target.value);
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      setTask(event?.target.value);
      onAddTask(task);
      setTask('');
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={task}
        placeholder="Adicione uma nova tarefa"
        onKeyDown={registerTask}
        onChange={registerTask}
        className={styles.input}
      />
      <button className={styles.button} onClick={handleClickInCreate}>
        Criar <PlusCircle size={16} />
      </button>
    </div>
  );
}
