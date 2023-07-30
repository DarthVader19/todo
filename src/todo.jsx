import { useState } from "react";
import Table from "./table";

const Todo = () => {
  const [todo, setTodo] = useState({});

  const [todos, setTodos] = useState([]);

  const onDel = (i, row) => {
    setTodos((prev) => {
     return  prev.filter(t=>t.task!==row.task)
    });
    // console.log(todos, row);
  };

  const handleAdd = () => {
    if (todo.task) {
      setTodos((prev) => {
        return [...prev, todo];
      });
    //   console.log(todo, todos);
      setTodo({ task: "" });
    }
  };

  const handleClear = () => {
    if (todos.length>0) {
      setTodos([]);
    //   console.log(todo, todos);
    }
  };

//   const handleChange = ()

  return (
    <div className="container">
      <div>
        <div>
          <label className="mr-4" htmlFor="vehNo">
            {" "}
            {"Task"}
          </label>
          <input
            className="rounded p-1 border-2"
            type="text"
            id="todo"
            name="todo"
            onChange={(e) =>
              setTodo((prev) => {
                return {
                  ...prev,
                  task: e.target.value,
                  isCompleted: false,
                  time: new Date().toLocaleTimeString(),
                };
              })
            }
            value={todo.task}
          />
        </div>

       <div className="flex pl-9 flex-wrap	 ">
       <div className="bg-gray-200 w-14 justify-center flex p-1 rounded m-2 hover:text-green-500">
          <button type="submit" onClick={handleAdd}>
            Add
          </button>
        </div>

        <div className="bg-gray-200 w-14 justify-center flex  ml-20  rounded m-2 hover:text-red-500">
          <button   type="submit" onClick={handleClear}>
            Clear
          </button>
        </div>
       </div>
      </div>

      <Table data={todos} setTodos={setTodos} handleDelete={onDel} />
    </div>
  );
};

export default Todo;
