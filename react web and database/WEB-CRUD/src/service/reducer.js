import { intialValue } from "./service"
import { allFetchs } from "./service"

export const reducer = (state = intialValue,action) => {
    switch(action.type){
        case allFetches.fetch_user_request :
            return {
                ...state,loading:true,
            }
        case allFetchs.fetch_user_success:
            return {
                loading:false,user:action.payload,error:""
            }  
        case allFetchs.fetch_user_failure:
            return {
                loading:false,user:[''],error:action.payload
            }  
        default :
        return state        
    }
}


export const fetchuserrequest = () => ({type:allFetchs.fetch_user_request});
export const fetchusersuccess = user => ({type:allFetchs.fetch_user_success,payload:user});
export const fetchuserfailure = error => ({type:allFetchs.fetch_user_failure,payload:error});

