export default function Signup() {

  function handleSubmit(e) {
    e.preventDefault();
    alert("barinda");
  }

  function handleInp(e) {
    console.log(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInp}
        className="border"
      />
      <button type="submit">send</button>
    </form>
  );
}
