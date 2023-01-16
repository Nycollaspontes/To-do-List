import { Itask } from '../../App'
import { Task } from '../task/Index'
import styles from './Tasks.module.css'

interface Props {
  tasks: Itask[]
}

export function Tasks({tasks}:Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted === true).length

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span>{completedTasks} de {tasksQuantity}</span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map(task => (
          <Task
          key={task.id}
          task={task}
          />
        ))}
      </div>
    </section>
  )
}