import { useState } from "react";
import pads from "./pads";

export default function App() {
  const [pad, setPad] = useState(pads);

  const allPads = pad.map((padItem) => {
    return (
      <button
        key={padItem.id}
        style={{ backgroundColor: padItem.color }}
        className="m-2 p-4 h-40 w-40"
      >
        {padItem.on}
      </button>
    );
  });

  return (
    <div className="bg-green-200 w-full h-full text-center mx-auto">
      {allPads}
    </div>
  );
}