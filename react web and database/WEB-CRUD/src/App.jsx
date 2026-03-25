import {createStore,applyMiddleware} from "redux";
import { thunk} from "thunk"

export default  function App(){

  const initialStateValue = {
    loading:false,
    users:[],
    error:""
  };


  const fetch_user_request = 'fetch_user_request';
  const fetch_user_success = 'fetch_user_success';
  const fetch_user_failure = 'fetch_user_failure';

  function fetchUserRequest(){
    return{
      type:fetch_user_request,
    };
  }


    function fetchUserSuccess(users){
    return{
      type:fetch_user_success,
      payLoad:users
    };
  }

    function fetchUserFailure(error){
    return{
      type:fetch_user_failure,
      payLoad:error
    };
  }



  const reducer = (state = initialStateValue, actions) =>{
       switch(actions.type){
        case fetch_user_request : return {...state,loading:true}
        case fetch_user_success : return {loading:false,users:actions.payLoad,error:''}
        case fetch_user_failure : return {loading:false,users:[],error:actions.payLoad}
        default: return state;
       }
  }

  const getAllData = () => {
      return async function(dispatch){
           try{
            dispatch(fetchUserRequest());
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
           }
      };
  }

  return(
    <div>
      <button className="border h-10 w-50 m-10 cursor-pointer">get all users</button>
    </div>
  )
}