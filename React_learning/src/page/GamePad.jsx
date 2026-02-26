import { useState } from "react";
import pads from "./pads";

export default function App() {
  const [pad, setPad] = useState(pads);

  const allPads = pad.map((padItem) => {
    return (
      <button
        key={padItem.id}
        style={{ backgroundColor: padItem.color }}
        className="m-2 p-4"
      >
        {padItem.text}
      </button>
    );
  });

  return (
    <div className="bg-green-300 w-full h-full text-center mx-auto">
      {allPads}
    </div>
  );
}