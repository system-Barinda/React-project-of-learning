import { intialValue } from "../service/service";
import { allFetchs } from "../service/service";
export default function DashBoardRedux(){

const fetchuserrequest = () => ({type:allFetchs.fetch_user_request});
const fetchusersuccess = user => ({type:allFetchs.fetch_user_success,payload:user});
const fetchuserfailure = error => ({type:allFetchs.fetch_user_failure,payload:error});


    return(
        <>
        <h1>the page of dashiboard</h1>
        <div>the content of this page</div>
        </>
    )
}