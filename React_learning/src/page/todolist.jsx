import TaskList from "../components/taskList";
import { initialTasks } from "../data/initialTasks";
import { useReducer, useState } from "react";

let nextId = initialTasks.length;

const reducerTask = (tasks, action) => {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];

    case "change":
      return tasks.map(task =>
        task.id === action.id
          ? { ...task, text: action.text, done: action.done }
          : task
      );

    default:
      return tasks;
  }
};

export default function TodoList() {
  const [tasks, dispatch] = useReducer(reducerTask, initialTasks);
  const [text, setText] = useState("");

  const handleAddTask = () => {
    dispatch({ type: "add", id: nextId++, text });
    setText("");
  };

  return (
    <div className="mx-auto border h-100 w-200 shadow">
      <input
        type="text"
        className="border"
        name="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="enter name"
      />
      <button className="border" onClick={handleAddTask}>
        add
      </button>

      <TaskList tasks={tasks} />
    </div>
  );
}