import { PDFDownloadLink } from "@react-pdf/renderer";
import { ITask } from "../Interfaces";
import Button from "../UI_Shared/Button";
import Text from "../UI_Shared/Text";
import MyDocument from "./TodoDataPdf";
import { IoIosCloseCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { DragEvent, useEffect, useState } from "react";
import Confetti from "./Confetti/Confetti";

interface Iprops {
  TodoList: ITask[];
  setTodoList: (TodoList: ITask[]) => void;
  setButtonType: (buttonType: boolean) => void;
  setTask: (task: ITask) => void;
}

function TodoData({ TodoList, setTodoList, setButtonType, setTask }: Iprops) {
  //Delete Done
  const RemoveTask = (id: string) => {
    console.log(id);
    const FilterTask = TodoList.filter((task) => task.id !== id);
    setTodoList(FilterTask);

    if (completedTasks[id]) {
      setTaskcompleted((prev) => prev - 1);
    }
  };
  //Done
  const [completedTasks, setCompletedTasks] = useState<{
    [key: string]: boolean;
  }>({});

  //Task was Done
  const [Taskcompleted, setTaskcompleted] = useState<number>(0);
  const TaskOnDone = (id: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [id]: true,
    }));
    setTaskcompleted((prev) => prev + 1);
  };

  //Celebrate
  const [celebrate, setCelebrate] = useState(false);

  const handleCelebrate = () => {
    setCelebrate(true);

    // Set a timer to stop the confetti after 5 seconds
    setTimeout(() => {
      setCelebrate(false);
    }, 8000);
  };

  useEffect(() => {
    // Check if TodoList.length is equal to Taskcompleted
    if (TodoList.length === Taskcompleted) {
      // Automatically trigger the celebration when conditions are met
      handleCelebrate();
    }
  }, [TodoList.length, Taskcompleted]);

  // في المكان الذي تقوم فيه بتحديد أن المهمة قد تمت
  // قم بتعويض "taskId" بالمعرف الفعلي للمهمة
  //Update Task

  //edit Task

  const OnEditHandler = (index: number) => {
    setButtonType(true);
    setTask(TodoList[index]);
  };

  //Drag and Drop
  const [draggedTask, setDraggedTask] = useState<ITask | null>(null);

  const handleDragStart = (task: ITask) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: DragEvent<HTMLUListElement>) => {
    e.preventDefault();
  };

  const handleDrop = (index: number) => {
    if (draggedTask) {
      const updatedList = [...TodoList];
      const draggedIndex = TodoList.findIndex(
        (task) => task.id === draggedTask.id
      );
      updatedList.splice(draggedIndex, 1);
      updatedList.splice(index, 0, draggedTask);
      setTodoList(updatedList);
      setDraggedTask(null);
    }
  };

  return (
    <div className="bg-white my-5 w-[100%] mx-auto text-center  xl:w-[100%] md:w-[80%] rounded-md py-5 h-[full] ">
      <Text as="h3">Your Task</Text>
      {TodoList?.length ? (
        <>
          {celebrate && <Confetti />}

          <div>
            <h4 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 my-4">
              Number Of Tasks is : {TodoList.length}
            </h4>
            <h3 className="font-extrabold text-2xl">
              Completed Tasks:{Taskcompleted}
            </h3>
            <ul className="flex justify-around bg-gradient-to-r from-blue-500 to-sky-500 py-3 text-white font-semibold text-lg my-5 w-full">
              <li className="me-auto">Tasks</li>
              <li className="m-auto">Date</li>
              <li className="m-auto">Time</li>
              <li className="ms-auto">Option</li>
            </ul>
            <>
              <div className="TodoListStyle w-full">
                {TodoList.map((Tasks, index) => {
                  return (
                    <ul
                      key={Tasks.id}
                      draggable={!completedTasks[Tasks.id]}
                      onDragStart={() => handleDragStart(Tasks)}
                      onDragOver={(e) => handleDragOver(e)}
                      onDrop={() => handleDrop(index)}
                      className={
                        completedTasks[Tasks.id]
                          ? "flex justify-around text-center TodoList my-1 py-3 text-white font-semibold w-full CompletedTasks before-line cursor-move "
                          : "flex justify-around text-center TodoList my-1 py-3 text-white font-semibold w-full cursor-move "
                      }
                    >
                      <li className="me-auto">{Tasks.YourTask}</li>
                      <li className="m-auto">{Tasks.Date}</li>
                      <li className="m-auto">{Tasks.Time}</li>
                      <li className=" flex flex-row  gap-2 ms-auto">
                        <span
                          className={
                            completedTasks[Tasks.id]
                              ? "text-2xl cursor-not-allowed"
                              : "text-2xl cursor-pointer"
                          }
                          onClick={() => TaskOnDone(Tasks.id)}
                        >
                          <IoCheckmarkDoneCircle />
                        </span>
                        <span
                          className={
                            completedTasks[Tasks.id]
                              ? "text-2xl cursor-not-allowed"
                              : "text-2xl cursor-pointer"
                          }
                          onClick={() => OnEditHandler(index)}
                        >
                          <CiEdit />
                        </span>
                        <span
                          className={"text-2xl cursor-pointer focus:bg-red-500"}
                          onClick={
                            () => RemoveTask(Tasks.id)
                            //
                          }
                        >
                          <IoIosCloseCircle />
                        </span>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </>
            <PDFDownloadLink
              document={<MyDocument TodoList={TodoList} />}
              fileName="hello"
            >
              <Button
                variant={"solid"}
                className="rounded-full font-semibold w-[50%]"
              >
                Download
              </Button>
            </PDFDownloadLink>
          </div>
        </>
      ) : (
        <Text as="h3" variant={"solid"}>
          You dont have task yet
        </Text>
      )}
    </div>
  );
}

export default TodoData;
