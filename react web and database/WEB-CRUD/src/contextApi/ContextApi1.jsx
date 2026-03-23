import { useContext } from "react"

export default function ContextApi1(){
    const {data} = useContext(contextApi);
    console.log(data)
    return(
        <h1>done</h1>
    )
}