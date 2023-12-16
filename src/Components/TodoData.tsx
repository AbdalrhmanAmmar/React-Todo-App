import Button from "../UI_Shared/Button";

function TodoData() {
  const X = true;
  return (
    <div className="bg-white my-5 w-[90%] mx-auto text-center  xl:w-[100%] md:w-[80%] rounded-md py-5 h-[full] ">
      <h3 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-sky-500 my-2">
        Your Task
      </h3>
      {X ? (
        <h3 className="font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 my-2">
          You dont have task yet.
        </h3>
      ) : (
        <div>
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
      )}
    </div>
  );
}

export default TodoData;
