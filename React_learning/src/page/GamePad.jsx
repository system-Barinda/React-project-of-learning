import { useState } from "react";
import padsData from "./pads";
import Pad from "./Padd";

export default function App() {
  const [pads, setPads] = useState(padsData);

  function togglePad(id) {
    setPads(prevPads =>
      prevPads.map(pad =>
        pad.id === id ? { ...pad, on: !pad.on } : pad
      )
    );
  }

  const buttonElements = pads.map(pad => (
    <Pad
      key={pad.id}
      id={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={togglePad}
    />
  ));

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  );
}