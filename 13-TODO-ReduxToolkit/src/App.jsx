import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { loadTodo } from "./features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    const todosFromLS = JSON.parse(localStorage.getItem("todos"));
    if (todosFromLS && todosFromLS.length > 0) {
      dispatch(loadTodo(todosFromLS));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="bg-slate-900 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2 ">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
