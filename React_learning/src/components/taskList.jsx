export default function TaskList({ tasks }) {
  const taskLists = tasks.map((list) => {
    return (
      <li key={list.id}>{list.name}</li>
    );
  });

  return (
    <div className="border">
      <ul>
        {taskLists}
      </ul>
    </div>
  );
}