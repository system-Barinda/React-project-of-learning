export default function Button({ value }) {
  return (
    <>
      {value.map(user => (
        <button
          key={user.id}
          className="border h-30 w-40"
        >
          {user.on ? "done" : "not yet done"}
        </button>
      ))}
    </>
  )
}