import React from "react";


function MyButton() {
  return (
    <button className="round bg-amber-300">
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
