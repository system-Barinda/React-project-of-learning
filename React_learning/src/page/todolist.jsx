import TaskList from "../components/taskList"
const tasks = [
     { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
]
export default function toDolist(){
    
    return(
        <div className="mx-auto border h-100 w-200 shadow">
       <TaskList tasks= {tasks} />
        </div>
    )
}