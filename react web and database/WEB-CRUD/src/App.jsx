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
    </div>
  );
}