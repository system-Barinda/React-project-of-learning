import { useEffect, useState } from "react"
import Card from "./card"
import url from "./data"
export default function Pagnation(){
    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(() => {
         const fechData = async() => {
            try{
             const response = await fetch(url);
             if(!response.ok) throw new Error('network connection failed');
             const correct = await response.json();
             setData(correct);
           }
           catch(err){
            setData(new Error(err.message))
           }
         }
         
         fechData()
    },[])
    return(
        <Card props ={data}/>
    )
}