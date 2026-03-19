 import {useDispatch} from "react-redux";
 import { login } from "../features/Users"
export default function Login() {
    const  dispatch = useDispatch();

    return (
    <button onClick={() => {dispatch(login({name:"barinda", age:20, email:"systembarinda@gmail.com"}))}}>login </button>)
}