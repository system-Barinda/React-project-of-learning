import { css } from "../styled-system/css";
import { useState } from "react";
import { parentDiv,parentDiv1,h1cssDiv2,inputbutton,inputLone,buttonLone } from "./Styles/TodoList";

function App() {
  const todos1 = [
    {
      id: 1,
      title: "Learn React",
      description: "Understand hooks and components",
      completed: false,
      createdAt: "2026-03-27",
    },
    {
      id: 2,
      title: "Build App",
      description: "Create full todo project",
      completed: false,
      createdAt: "2026-03-27",
    },
  ];

  const [todos, setTodos] = useState(todos1);
  const [newTodo, setNewTodo] = useState("");


  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const todo = {
      id: Date.now(),
      title: newTodo,
      description: "New task",
      completed: false,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setTodos([...todos, todo]);
    setNewTodo(""); 
  };

  return (
    <div
      className={css(parentDiv)}
    >
      <div
        className={css(parentDiv1)}
      >
        <h1
          className={css(h1cssDiv2)}
        >
          📝 Todo List
        </h1>

        {/* INPUT + BUTTON */}
        <div
          className={css(inputbutton)}
        >
          <input
            type="text"
            value={newTodo} // ✅ bind state
            onChange={(e) => setNewTodo(e.target.value)} // ✅ update state
            placeholder="Enter the todo you want..."
            className={css(inputLone)}
          />

          <button
            onClick={handleAddTodo} 
            className={css(buttonLone)}
          >
            Add
          </button>
        </div>

        {/* TODO LIST */}
        {todos.map((data) => (
          <div
            key={data.id}
            className={css({
              p: "12px",
              mb: "10px",
              borderRadius: "10px",
              bg: data.completed ? "green.100" : "gray.50",
              border: "1px solid",
              borderColor: "gray.200",
            })}
          >
            <h2
              className={css({
                fontWeight: "bold",
                fontSize: "16px",
              })}
            >
              {data.title}
            </h2>

            <p
              className={css({
                fontSize: "14px",
                color: "gray.600",
              })}
            >
              {data.description}
            </p>

            <span
              className={css({
                fontSize: "12px",
                color: "gray.400",
              })}
            >
              {data.createdAt}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;