import { useState } from "react";
import pads from "./pads";

import Padd from "./Padd";
export default function App() {
  const [pad, setPad] = useState(pads);

  const buttonElements = pad.map((padItem) => {
    return (
    //   <button
    //     key={padItem.id}
    //     style={{ backgroundColor: padItem.color }}
    //     className="m-2 p-4 h-40 w-40"
    //   >
    //     {padItem.on}
    //   </button>
    <Padd key={pad.id} color={pad.color} on={pad.on}/>
    );
  });

  return (
    <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
  );
}