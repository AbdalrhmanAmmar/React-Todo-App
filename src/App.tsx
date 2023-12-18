import { FormEvent, useState } from "react";
import TodoApp from "./Components/TodoApp";
import TodoData from "./Components/TodoData";
import { ITask } from "./Interfaces";
import { v4 as uuid } from "uuid";

function App() {
  const [TodoList, setTodoList] = useState<ITask[]>([]);
  //change button

  const [Task, setTask] = useState<ITask>({
    id: "",
    YourTask: "",
    Date: "",
    Time: "",
  });

  const OnTaskSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Store Task to TaskList
    if (selectedTask) {
      setTodoList((prev) =>
        prev.map((task) => (task.id === selectedTask ? Task : task))
      );
      setSelectedTask(null);
    } else {
      setTodoList([...TodoList, { ...Task, id: uuid() }]);
    }

    setTask({ id: "", YourTask: "", Date: "", Time: "" });
  };
  //Edit Task
  const [selectedTask, setSelectedTask] = useState<string | null>(null);



  return (
    <div className="grid grid-cols-12 gap-6 px-5 xl:pr-40 my-14 sm:px-20 md:px-40px  flex-wrap-reverse border-none ">
      <div className="col-span-12 p-4 text-center  xl:col-span-4 md:col-span-12  rounded-2xl bg-white sidebar xl:order-2 xl:w-[120%]">
        <TodoApp
          Task={Task}
          setTask={setTask}
          OnTaskSubmit={OnTaskSubmit}
        />
      </div>

      <div className="flex flex-col col-span-12 bg-white xl:col-span-8  md:col-span-12 rounded-2xl   xl:order-1 xl: ">
        <TodoData
          TodoList={TodoList}
          setTodoList={setTodoList}
        />
      </div>
    </div>
  );
}

export default App;
