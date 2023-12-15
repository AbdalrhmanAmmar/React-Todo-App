import TodoApp from "./Components/TodoApp";
import TodoData from "./Components/TodoData";

function App() {
  return (
    <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 sm:px-20 md:px-40px  flex-wrap-reverse justify-center ">
      <div className="col-span-12 p-4 text-center  xl:col-span-4 md:col-span-12  rounded-2xl bg-white sidebar xl:order-2 xl:w-[120%]">
        <TodoApp />
      </div>

      <div className="flex flex-col col-span-12 bg-white xl:col-span-8  md:col-span-12 rounded-2xl   xl:order-1">
        <TodoData />
      </div>
    </div>
  );
}

export default App;
