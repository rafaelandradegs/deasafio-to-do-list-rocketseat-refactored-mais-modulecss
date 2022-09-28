import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { CountTask } from './components/CountTask';
import { CreateTask } from './components/CreateTask';
import { Header } from './components/Header';
import { ListTasks } from './components/ListTasks';
import { ListVoid } from './components/ListVoid';
import './styles/global.css';

export interface PropsTask {
  id: string;
  taskList: string;
  isCompleted: boolean;
}

export function App() {
  const [todoList, setTodoList] = React.useState<PropsTask[]>([]);
  const [iscompleted, setIsCompleted] = React.useState<boolean>(false);

  function handleAddNewTaskInList(task: string) {
    const taskId = uuidv4();

    const listTaskComplete = {
      id: taskId,
      taskList: task,
      isCompleted: false,
    };
    setTodoList([...todoList, listTaskComplete]);
  }

  function handleDeleteTask(taskId: string) {
    const newListWithoutDeleteTask = todoList.filter(
      task => task.id !== taskId,
    );
    setTodoList(newListWithoutDeleteTask);
  }

  function handleCheckedTask(taskId: string) {
    const newListWithTaskSelected = todoList.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTodoList(newListWithTaskSelected);
  }

  return (
    <div>
      <Header />
      <CreateTask onAddTask={handleAddNewTaskInList} />
      <CountTask todoList={todoList} />
      {todoList.length === 0 ? (
        <ListVoid />
      ) : (
        <ListTasks
          todoList={todoList}
          onDelete={handleDeleteTask}
          onSelectedTask={handleCheckedTask}
        />
      )}
    </div>
  );
}
