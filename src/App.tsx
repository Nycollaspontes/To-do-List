import { useState } from "react";
import { Header } from "./components/Header/Index"
import { Tasks } from "./components/Tasks/Index"

export interface Itask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {

  const [tasks, setTasks] = useState<Itask[]>([
    {
      id: "teste",
      title: "test",
      isCompleted: true,
    }, {
      id: "teste2",
      title: "test2",
      isCompleted: false,
    }
  ])

  return (
    <>
      <Header />
      <Tasks tasks={tasks} />
    </>
  )
}

export default App
