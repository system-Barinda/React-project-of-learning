import { fetchuserfailure, fetchuserrequest, fetchusersuccess } from "../service/reducer";
import { useDispatch } from "react-redux";
import { dataFetch } from "../service/fetchUser";
import { useEffect } from "react";
export default function GetAllData() {
const dispatch = useDispatch();
useEffect(() => {
    dispatch(dataFetch);
},[])


}