import { useDispatch } from "react-redux"
import { barindaLoginUser,barindaLogoutUser as logout } from "../features/BarindaUsers"

export default function BarindaLogin(){
    const userBarinda = useDispatch()

    return(
        <>
        <button onClick={() => {userBarinda(barindaLoginUser({name:"barinda",age:11,email:"sus@gmail.come"}))}}>login</button>
        <button onClick={() => {userBarinda(logout())}}>logout</button>
        </>
    )
}