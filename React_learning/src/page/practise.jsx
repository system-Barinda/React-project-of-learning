import { useState } from "react";

export default function Barinda(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"];
    const[items,setItemes] = useState(ingredients);

    const ingredi = items.map((item) => {
        return<li key={item}>{item}</li>
    })
   
    return(
        <>
             <div className="flex ">
                <input type="text"
                name="item"
                placeholder="enter the ingradient"
                className="border h-10 w-50 mr-5" />
                <button className="border"> add items</button>
             </div>

             <div className="result">

             </div>
        </>
    )
}