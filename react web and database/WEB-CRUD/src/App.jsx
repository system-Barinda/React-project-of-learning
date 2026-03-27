import { css } from "../styled-system/css";
import { useState } from "react";

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

  return (
    <div
      className={css({
        minH: "100vh",
        bg: "gray.100",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      <div
        className={css({
          width: "400px",
          bg: "white",
          p: "20px",
          borderRadius: "12px",
          boxShadow: "lg",
        })}
      >
        <h1
          className={css({
            fontSize: "20px",
            fontWeight: "bold",
            mb: "15px",
          })}
        >
          📝 Todo List
        </h1>

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