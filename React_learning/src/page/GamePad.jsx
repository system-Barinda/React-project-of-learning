import { useState } from "react";
import pads from "./pads";


export default function App(){
    const[pad,setPad] = useState(pads)

    const allPad = pad.map((padd) => {
        return(
           <button key={padd.id} style={{backgroundColor:padd.color}}>{padd}</button>
        )
    })
    
    return(
        <>
         <div className="bg-green-300 text w-full h-full text-center mx-auto">
              {allPad}
            </div>
        </>
    )
}