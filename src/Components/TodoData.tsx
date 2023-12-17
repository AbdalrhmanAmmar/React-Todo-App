import { ITask } from "../Interfaces";
import Button from "../UI_Shared/Button";
import Text from "../UI_Shared/Text";

interface Iprops {
  TodoList:ITask[]
}

function TodoData({ TodoList }: Iprops) {
  const X = false;
  return (
    <div className="bg-white my-5 w-[100%] mx-auto text-center  xl:w-[100%] md:w-[80%] rounded-md py-5 h-[full] ">
      <Text as="h3">Your Task</Text>
      {X ? (
        <Text as="h3" variant={"solid"}>
          You dont have task yet
        </Text>
      ) : (
        <>
          <div>
            <h4 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 my-2">
              Number Of Tasks is
            </h4>
            <ul className="flex justify-around bg-gradient-to-r from-blue-500 to-sky-500 py-3 text-white font-semibold text-lg my-4 w-full">
              <li>Tasks</li>
              <li>Date</li>
              <li>Time</li>
              <li>Option</li>
            </ul>

            <Button  variant={"solid"} className="rounded-full font-semibold w-[50%]">
              Download
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoData;
