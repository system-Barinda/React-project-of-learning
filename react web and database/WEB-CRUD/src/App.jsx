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



  return(
    <div>
      <button className="border h-10 w-50 m-10 cursor-pointer">get all users</button>
    </div>
  )
}