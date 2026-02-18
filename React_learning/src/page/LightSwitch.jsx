export default function LightSwitch() {
  function handleClick() {
    const bodyStyle = document.body.style;

    bodyStyle.backgroundColor =
      bodyStyle.backgroundColor === "black" ? "white" : "black";
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}
