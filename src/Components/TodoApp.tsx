import { ChangeEvent, FormEvent, Fragment } from "react";
import Button from "../UI_Shared/Button";
import Input from "../UI_Shared/Input";
import Label from "../UI_Shared/Label";
import TaskInformations from "../Lists/TaskInformation";
import { ITask } from "../Interfaces";

interface Iprops {
  Task: ITask;
  setTask: (Task: ITask) => void;
  OnTaskSubmit: (event: FormEvent<HTMLFormElement>) => void;
  TypeButton: boolean;
}

function TodoApp({
  Task,
  setTask,
  OnTaskSubmit,
  TypeButton,
  UpdateTask,
}: Iprops) {
  //!SECTION



  //Go to App

  // const [Task, setTask] = useState<ITask>({
  //   YourTask: "",
  //   Date: "",
  //   Time: "",
  // });

  //Error message

  const OnTaskhandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...Task,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="bg-white my-5 w-[90%] mx-auto text-center lg:w-[60%] md:w-[80%] rounded-md py-8 xl:w-[75%] ">
      <h2 className="text-black font-semibold text-3xl">
        MY{" "}
        <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Todo
        </span>{" "}
        App
      </h2>
      <form action="" onSubmit={OnTaskSubmit}>
        {TaskInformations.map((input, idx) => (
          <Fragment key={idx}>
            <Label
              className="flex justify-center items-center cursor-pointer bold"
              Text={input.name}
              htmlFor={input.id}
            ></Label>

            <Input
              type={input.type}
              name={input.name}
              value={Task[input.name]}
              onChange={OnTaskhandler}
              maxLength={7}
              minLength={3}
            />
          </Fragment>
        ))}

        {!TypeButton ? (
          <Button className="my-4" type="submit">
            Add task
          </Button>
        ) : (
          <Button variant={"solid"} onClick={() => UpdateTask(Task.id)}>
            Update
          </Button>
        )}
      </form>
    </div>
  );
}

export default TodoApp;
