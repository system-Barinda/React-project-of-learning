import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { changecolor } from "../features/theme";

function ChangeColor(){
    const changedColor = useDispatch();
    const [color,setColor] = useState("")
    return(<>
         <input type="text" onChange={(e) => {setColor(e.target.value)}} />
        <button onClick={() => {changedColor(changecolor(color))}}>change color</button>
    </>)
}
export default ChangeColor;