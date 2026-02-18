import { useState } from "react";

export default function Interactive(){
    const[data,setData] = useState([]);
   const names = "barinda system sylvere";

    const handlebutton = (prev) => {
     
     setData(names);
    }
    return(
        <div>
        <button onClick={handlebutton}>add barinda</button>
        
        {data.forEach((el,indes) => (
            <button key={indes}>el</button>
        ))}
        </div>
    )
}