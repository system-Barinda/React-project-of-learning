import { useContext } from "react";
import { ContextApi } from "../App"; 

export default function ContextApi1() {
  const data = useContext(ContextApi); 

  console.log(data);

  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.location}</h1>
      <h1>{data.country}</h1>
    </div>
  );
}