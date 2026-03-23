import {createStore} from "react-redux"

export default function App(){

  const test_cake = 'done to buy it';
  
  const initialState = {
    numOfCakeTest : 20,
  };

  function Test_Cake(){
    return{
      type:test_cake,
      info:'done only'
    }
  }



  const reducer = (state = initialState,action) => {
      switch(action.type){
        case test_cake:return{ ...state,numOfCakeTest:numOfCakeTest - 1};
        default: return state;
      }
  }
  

  return(
    <h1>barinda system sylvere</h1>
  )
}

const store = createStore(reducer)
