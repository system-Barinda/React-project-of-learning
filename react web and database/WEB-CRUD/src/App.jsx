import { css } from "../styled-system/css";

export default function App() {
  return (
    <div
      className={css({
        bg: "blue.500",
        color: "white",
        p: "4",
      })}
    >
      Panda is working 🐼

     <div
  className={css({
    color: "green.500",
    height: "100px",
    width: "100px",
    border: "1px solid black",
  })}
>
  my name is barinda system sylvere
</div>
    </div>
  );
}