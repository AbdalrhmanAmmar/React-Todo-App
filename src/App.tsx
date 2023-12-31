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

    if (selectedTask !== null && Task.YourTask.trim() !== "") {
      // Edit existing task
      const updatedTodoList = [...TodoList];
      updatedTodoList[selectedTask] = {
        ...Task,
        id: TodoList[selectedTask].id,
      };
      setTodoList(updatedTodoList);
      setTask({ id: "", YourTask: "", Date: "", Time: "" });
      setSelectedTask(null);
    } else if (Task.YourTask.trim() !== "") {
      // Add new task
      setTodoList([...TodoList, { ...Task, id: uuid() }]);
      setTask({ id: "", YourTask: "", Date: "", Time: "" });
    }
  };
  //Edit Task
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  //Change button for Add to Edit

  const [ButtonType, setButtonType] = useState<boolean>(false);

  const handleCancelEdit = () => {
    setTask({ id: "", YourTask: "", Date: "", Time: "" });
    setButtonType(false);
  };

  const YourDateIsEdited = () => {
    if (selectedTask !== null && Task.YourTask.trim() !== "") {
      const newDataList = [...TodoList];
      newDataList[selectedTask] = { ...Task, id: TodoList[selectedTask].id };
      setTodoList(newDataList);
      setTask({ id: "", YourTask: "", Date: "", Time: "" });
      setSelectedTask(null);
    }
    setButtonType(false);
  };
  return (
    <div className="grid grid-cols-12 gap-6 px-5 xl:pr-40 my-14 sm:px-20 md:px-40px  flex-wrap-reverse border-none ">
      <div className="col-span-12 p-4 text-center  xl:col-span-4 md:col-span-12  rounded-2xl bg-white sidebar xl:order-2 xl:w-[120%]">
        <TodoApp
          Task={Task}
          setTask={setTask}
          OnTaskSubmit={OnTaskSubmit}
          ButtonType={ButtonType}
          handleCancelEdit={handleCancelEdit}
          YourDateIsEdited={YourDateIsEdited}
          selectedTask={selectedTask}
        />
      </div>

      <div className="flex flex-col col-span-12 bg-white xl:col-span-8  md:col-span-12 rounded-2xl   xl:order-1 xl: ">
        <TodoData
          TodoList={TodoList}
          setTodoList={setTodoList}
          setButtonType={setButtonType}
          setTask={setTask}
          setSelectedTask={setSelectedTask}
        />
      </div>
    </div>
  );
}

export default App;
