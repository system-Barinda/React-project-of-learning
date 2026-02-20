export default function TaskList({ tasks }) {
  const taskLists = tasks.map((list) => {
    return (
      <li key={list.id}>{list.text}</li>
      
    );
  });

  return (
    <div className="">
      <ul>
        {taskLists}
      </ul>
    </div>
  );
}