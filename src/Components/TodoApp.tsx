import { ChangeEvent, Fragment, useState } from "react";
import Button from "../UI_Shared/Button";
import Input from "../UI_Shared/Input";
import Label from "../UI_Shared/Label";
import TaskInformations from "../Lists/TaskInformation";
import { ITask } from "../Interfaces";
import Text from "../UI_Shared/Text";

function TodoApp() {
  const [Task, setTask] = useState<ITask>({
    YourTask: "",
    Date: "",
    Time: "",
  });

  //Error message

  const OnTaskSubmit = (event: ChangeEvent<HTMLInputElement>) => {
    setTask({
      ...Task,
      [event.target.name]: event.target.value,
    });

    console.log(Task);
  };

  return (
    <div className="bg-white my-5 w-[90%] mx-auto text-center lg:w-[60%] md:w-[80%] rounded-md py-8 ">
      <h2 className="text-black font-semibold text-3xl">
        MY{" "}
        <span className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          Todo
        </span>{" "}
        App
      </h2>
      {TaskInformations.map((input, idx) => (
        <Fragment key={idx}>
          <Label
            className="flex justify-center items-center cursor-pointer bold"
            Text={input.name}
            htmlFor={input.id}
          ></Label>
          <div className="flex justify-center items-center flex-col">
            <Input
              type={input.type}
              name={input.name}
              value={Task[input.name]}
              onChange={OnTaskSubmit}
            />
            <span className="">hello</span>
          </div>
        </Fragment>
      ))}
      <Button
        className="my-4"
        type="submit"
        onClick={() => console.log("python")}
      >
        Add task
      </Button>
    </div>
  );
}

export default TodoApp;
