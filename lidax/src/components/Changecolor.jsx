import React, {useState} from "react";

function ChangeColor(){
    const [color,setColor] = useState("")
    return(<>
         <input type="text" onChange={(e) => {setColor(e.target.value)}} />
        <button>change color</button>
    </>)
}