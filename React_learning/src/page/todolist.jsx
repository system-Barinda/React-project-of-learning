import TaskList from "../components/taskList"
import {initialTasks} from "../data/initialTasks"
import { useReducer } from "react";
let nextId = 0;



const reducerTask = (tasks,action) => {
  switch(action.type){
    case 'add' : return { id :nextId++,text:nextName,done:true};
    case 'change' : return { id :nextId--,text:nextName,done:true};
    default : return {id,text,done};
  };
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