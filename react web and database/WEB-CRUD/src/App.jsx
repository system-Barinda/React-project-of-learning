import {createStore,applyMiddleware} from "redux";
import { thunk} from "thunk"

export default  function App(){

  const initialStateValue = {
    loading:false,
    users:[],
    error:""
  };
  

  return(
    <div>
      <button className="border h-10 w-50 m-10 cursor-pointer">get all users</button>
    </div>
  )
}