import { useState,useCallback } from "react"

// function Button ({onClick}){
//     console.log("buttone are rerendered");
//     return <Button onClick={onClick}>clicked me</Button>
// }
// export default function Hooks(){
//     const[count,setCount] = useState(0);
//     const handleClick = () => {
//         console.log('clicked');
//     }
//     return(
//         <>
//         <h1>{count}</h1>
//          <button onClick={handleClick} />
//          <button onClick={() => setCount(count + 1)}>click</button>
//         </>
//     )
// }




const Button = React.memo(({ onClick }) => {
  console.log("Button rendered");
  return <button onClick={onClick}>Click me</button>;
});

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <h1>Count: {count}</h1>
      <Button onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
