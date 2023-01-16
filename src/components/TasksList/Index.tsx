import { TbClipboard } from 'react-icons/tb';
import { Itask } from '../../App'
import { Task } from '../task/Index'
import styles from './Tasks.module.css'

interface Props {
  tasks: Itask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onComplete }: Props) {
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
            onComplete={onComplete}
            onDelete={onDelete}
            key={task.id}
            task={task}
          />
        ))}
        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboard size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )
        }

      </div>
    </section>
  )
}