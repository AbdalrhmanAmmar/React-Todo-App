import { PDFDownloadLink } from "@react-pdf/renderer";
import { ITask } from "../Interfaces";
import Button from "../UI_Shared/Button";
import Text from "../UI_Shared/Text";
import MyDocument from "./TodoDataPdf";
import { IoIosCloseCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useState } from "react";

interface Iprops {
  TodoList: ITask[];
  setTodoList: (TodoList: ITask[]) => void;
}

function TodoData({ TodoList, setTodoList }: Iprops) {
  //Delete Done
  const RemoveTask = (id: string) => {
    console.log(id);
    const FilterTask = TodoList.filter((task) => task.id !== id);
    setTodoList(FilterTask);
  };
  //Done
  const [completedTasks, setCompletedTasks] = useState<{
    [key: string]: boolean;
  }>({});
  //edit Task

  const TaskOnDone = (id: string) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <div className="bg-white my-5 w-[100%] mx-auto text-center  xl:w-[100%] md:w-[80%] rounded-md py-5 h-[full] ">
      <Text as="h3">Your Task</Text>
      {TodoList?.length ? (
        <>
          <div>
            <h4 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 my-4">
              Number Of Tasks is : {TodoList.length}
            </h4>
            <ul className="flex justify-around bg-gradient-to-r from-blue-500 to-sky-500 py-3 text-white font-semibold text-lg my-5 w-full">
              <li>Tasks</li>
              <li>Date</li>
              <li>Time</li>
              <li>Option</li>
            </ul>
            <>
              <div className="TodoListStyle w-full">
                {TodoList.map((Tasks) => {
                  return (
                    <ul
                      key={Tasks.id}
                      className={
                        completedTasks[Tasks.id]
                          ? "flex justify-around text-center TodoList my-1 py-3 text-white font-semibold w-full CompletedTasks before-line "
                          : "flex justify-around text-center TodoList my-1 py-3 text-white font-semibold w-full "
                      }
                    >
                      <li>{Tasks.YourTask}</li>
                      <li>{Tasks.Date}</li>
                      <li>{Tasks.Time}</li>
                      <li className=" flex flex-row text-center gap-2 ">
                        <span
                          className={
                            completedTasks[Tasks.id]
                              ? "text-3xl cursor-not-allowed"
                              : "text-3xl cursor-pointer"
                          }
                          onClick={() => TaskOnDone(Tasks.id)}
                        >
                          <IoCheckmarkDoneCircle />
                        </span>
                        <span
                          className={
                            completedTasks[Tasks.id]
                              ? "text-3xl cursor-not-allowed"
                              : "text-3xl cursor-pointer"
                          }
                        >
                          <CiEdit />
                        </span>
                        <span
                          className={"text-3xl cursor-pointer"}
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
