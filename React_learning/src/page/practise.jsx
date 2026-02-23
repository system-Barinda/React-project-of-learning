import { useState } from "react";

export default function Barinda(){
    const ingredients = ["Chicken", "Oregano", "Tomatoes"];
    const[items,setItemes] = useState(ingredients);

    const ingredi = items.map((item) => {
        return<li key={item}>{item}</li>
    })

    const handleSubmitt = (event) => {
   event.preventDefault();
   const dataForm = new FormData(event.currentTarget);
   let newItem = dataForm.get("item");
   setItemes(prev => [...prev,newItem]);
    }
   
    return(
        <>
             <div className="flex ">
                <form action="" onSubmit={handleSubmitt}>
                <input type="text"
                name="item"
                placeholder="enter the ingradient"
                className="border h-10 w-50 mr-5" />
                <button className="border" type="submit"> add items</button></form>
             </div>

             <div className="result">
              {ingredi}
             </div>
        </>
    )
}