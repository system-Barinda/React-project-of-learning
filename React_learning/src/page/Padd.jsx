export default function Pad(props) {
  return (
    <button
      style={{ backgroundColor: props.color }}
      className={`w-20 h-20 m-2 ${props.on ? "opacity-100" : "opacity-40"}`}
      onClick={() => props.toggle(props.id)}
    />
  );
}