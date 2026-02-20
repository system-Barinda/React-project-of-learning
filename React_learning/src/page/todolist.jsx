import TaskList from "../components/taskList"
// import AddTask from "../components/AddTask"
import { useReducer } from "react";
let nextId = 0;



const reducerTask = () => {

}
export default function toDolist(){
const [tasks,dispatch] = useReducer(reducerTask,initialTasks);

const handleAddTask = () => {
    dispatch({type:'add',id:nextId++,text:text})
}


    return(
        <div className="mx-auto border h-100 w-200 shadow">
       
       <TaskList tasks={tasks} />
        </div>
    )
}