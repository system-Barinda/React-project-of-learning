import { css } from "../styled-system/css";

function App() {
  const todos = [
  {
    id: 1,
    text: "Learn React",
    completed: false,
  },
  {
    id: 2,
    text: "Build a Todo App",
    completed: true,
  },
];
  return (
    <>
      <div
        className={css({
          height: "100px",
          width: "300px",
          bg: "green.600",
        })}
      >

       
      </div>
    </>
  );
}

export default App;