import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTodo, updateTodo, deleteTodo } from "./store/actions/todoAction";
import { checkTodo } from "./store/actions/todoAction";
import "./App.css";

export default function App() {
  const lsTodo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [openUpdate, setOpenUpdate] = useState(false);
  const inputRef = useRef();

  const handleAdd = () => {
    dispatch(createTodo(input));
    setInput("");
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={handleAdd}>Add todo</button>
      <ol>
        {lsTodo?.map(({ id, content, isChecked }) => (
          <li key={id}>
            <input
              id={id}
              type="checkbox"
              name="todo"
              onChange={() => dispatch(checkTodo(id))}
              checked={isChecked}
              value={id}
            ></input>
            {openUpdate === id ? (
              <input
                defaultValue={content}
                onChange={(e) =>
                  dispatch(updateTodo({ id: id, content: e.target.value }))
                }
              ></input>
            ) : (
              <label
                htmlFor={id}
                style={{
                  textDecoration: isChecked ? "line-through" : "none",
                }}
              >
                {content}
              </label>
            )}
            <button
              onClick={() => setOpenUpdate(openUpdate === id ? null : id)}
            >
              Update
            </button>
            <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
