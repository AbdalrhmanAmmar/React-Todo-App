import { PDFDownloadLink } from "@react-pdf/renderer";
import { ITask } from "../Interfaces";
import Button from "../UI_Shared/Button";
import Text from "../UI_Shared/Text";
import { MyDocument } from "./TodoDataPdf";

interface Iprops {
  TodoList: ITask[];
}

function TodoData({ TodoList }: Iprops) {
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
              <div className="TodoListStyle">
                {TodoList.map((Tasks) => {
                  return (
                    <ul className="flex justify-around text-center TodoList my-1 py-3 text-white font-semibold ">
                      <li>{Tasks.YourTask}</li>
                      <li>{Tasks.Date}</li>
                      <li>{Tasks.Time}</li>
                      <li>Option</li>
                    </ul>
                  );
                })}
              </div>
            </>
            <PDFDownloadLink
              document={<MyDocument hello="its work" />}
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
