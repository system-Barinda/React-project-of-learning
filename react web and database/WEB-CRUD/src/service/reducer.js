import { intialValue } from "./service"


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