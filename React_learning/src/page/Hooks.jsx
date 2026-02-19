import { useState } from "react"

function Button ({onClick}){
    console.log("buttone are rerendered");
    return <Button onClick={onClick}>clicked me</Button>
}
export default function Hooks(){
    const[count,setCount] = useState(0);
    const handleClick = () => {
        console.log('clicked');
    }
    return(
        <>
        <h1>{count}</h1>
         <button onClick={handleClick} />
         <button onClick={() => setCount(count + 1)}>click</button>
        </>
    )
}