export default function LightSwitch() {
  function handleClick() {
    const bodyStyle = document.body.style;

    bodyStyle.backgroundColor =
      bodyStyle.backgroundColor === "black" ? "white" : "black";
      if(bodyStyle.backgroundColor === 'black'){
        bodyStyle.color === 'white'
      }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}
