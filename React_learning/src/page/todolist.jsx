import TaskList from "../components/taskList"
// import AddTask from "../components/AddTask"
import { useReducer } from "react";
let nextId = 0;
const initialTasks = [
     { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];


const reducerTask = () => {

}
export default function toDolist(){
const [tasks,dispatch] = useReducer(reducerTask,initialTasks);
const handleAddTask = () => {
    dispatch({type:'add',id:nextId++,text:text})
}
    return(
        <div className="mx-auto border h-100 w-200 shadow">
            {/* <AddTask
        onAddTask={handleAddTask}
      /> */}
       <TaskList tasks={tasks} />
        </div>
    )
}