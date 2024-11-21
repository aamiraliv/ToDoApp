import { useRef, useState } from "react";
import "./App.css";
import List from "./components/list";

function App() {
  const inputREf = useRef(null);

  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputREf.current.value !== "") {
      setList([...list, { id: Date.now(), text: inputREf.current.value }]);
      inputREf.current.value = "";
    }
  };

  const deleteTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };

  console.log(list);

  return (
    <>
      <div className=" flex flex-col justify-center items-center bg-green-950 gap-4 p-5 min-h-screen">
        <h1 className="text-white font-bold text-3xl">ToDoApp</h1>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full flex gap-2 items-center justify-center ">
            <input
              ref={inputREf}
              className="flex-grow w-auto text-white border-2 border-green-400 bg-green-950 rounded-md p-2 placeholder:text-gray-300 capitalize hover:focus:outline-none"
              type="text"
              placeholder="enter the task..!"
            />
            <button
              type="submit"
              className="flex items-center justify-center pb-3 p-2 text-white text-3xl font-semibold bg-green-600 h-10 w-10 rounded-full"
            >
              +
            </button>
          </div>
        </form>
        <List list={list} deleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
