// const tasks = [
//      { id: 0, text: 'Visit Kafka Museum', done: true },
//   { id: 1, text: 'Watch a puppet show', done: false },
//   { id: 2, text: 'Lennon Wall pic', done: false }
// ]

export default function TaskList(tasks){
    const taskLists = tasks.map((list) => {
        return(<ol>
            <li key={list.id}>{list.name}</li>
        </ol>);
    })
    return (
        <div className="border">
         
        </div>
    )
}