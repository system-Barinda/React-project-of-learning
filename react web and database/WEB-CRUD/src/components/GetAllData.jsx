import { fetchuserfailure,fetchuserrequest,fetchusersuccess } from "../service/reducer";
export default function GetAllData(){
       function dataFetch(){
        return function(dispatch){
            try{
            dispatch(fetchuserrequest());
         const res = fetch('https://jsonplaceholder.typicode.com/users');
         if(!res.ok) return dispatch(fetchuserfailure(new Error('failed to get all data')));
         const data = res.json();
         dispatch(fetchusersuccess(data));

        }
        catch(err){
            dispatch(fetchuserfailure(new Error(err.message)));
        }
    };
       }
    return(<h1>done</h1>);
}