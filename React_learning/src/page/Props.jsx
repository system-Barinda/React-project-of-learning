import { useState,useEffect } from "react"
import Cards from "../components/Cards"

const url = "https://fakestoreapi.com/products";
export default function DesplayData(){
const[product,setProduct] = useState({});

useEffect(() => {
    const getData = async() => {
        try{
            const response = await fetch(url);
            if(! response.ok) throw new Error('network connection failed');
            const data = await response.json();
            setProduct(data);
        }
        catch(err) {
            return new Error( err instanceof Error ? err : {
                errname:"something went wrong",
            why:err.reason});
        }
    }
})
    return (
        <Cards  />
    )
}