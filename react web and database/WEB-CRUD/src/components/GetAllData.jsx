import { fetchuserfailure,fetchuserrequest,fetchusersuccess } from "../service/reducer";
export default function GetAllData(){
       function dataFetch(){
        return function(dispatch){
         const res = fetch('https://jsonplaceholder.typicode.com/users');
        };
       }
    return(<h1>done</h1>);
}