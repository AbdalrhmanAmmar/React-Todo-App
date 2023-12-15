import Button from "../UI_Shared/Button";

function TodoData() {
  return (
    <div className="bg-white my-5 w-[90%] mx-auto text-center h-[75vh] xl:w-[100%] md:w-[80%] rounded-md py-5 ">
      <h3 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 my-2">
        Your Task
      </h3>
      <ul className="flex justify-around odd:bg-white even:bg-sky-500 py-3 text-white font-semibold text-lg my-4 w-full">
        <li>Tasks</li>
        <li>Date</li>
        <li>Time</li>
        <li>Option</li>
      </ul>

      <Button variant={"solid"} className="rounded-full">
        Download
      </Button>
    </div>
  );
}

export default TodoData;
