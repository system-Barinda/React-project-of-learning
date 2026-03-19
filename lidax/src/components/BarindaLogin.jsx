import { useDispatch } from "react-redux"
import { barindaLoginUser } from "../features/BarindaUsers"

export default function BarindaLogin(){
    const userBarinda = useDispatch()

    return(
        <>
        <button onClick={() => {userBarinda(barindaLoginUser({name:"barinda",age:11,email:"sus@gmail.come"}))}}>login</button>
        <button>logout</button>
        </>
    )
}