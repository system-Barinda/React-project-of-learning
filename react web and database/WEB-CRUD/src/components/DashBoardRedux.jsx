import { intialValue } from "../service/service";
import { allFetchs } from "../service/service";
import  rootReducer  from "../service/reducer";
import GetAllData from "./GetAllData";
export default function DashBoardRedux(){

    return(
        <>
        <GetAllData />
        <h1>the page of dashiboard</h1>
        <div>the content of this page</div>
        </>
    )
}