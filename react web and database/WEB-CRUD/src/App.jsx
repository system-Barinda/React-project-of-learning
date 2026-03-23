export default function App(){

  const test_cake = 'done to buy it';
  
  const initialState = {
    numOfCakeTest : 20,
  };

  function Test_Cake(){
    return{
      type:'done to update the current',
      info:'done only'
    }
  }



  const reducer = (state = initialState,action) => {
      switch(action.type){
        case Test_Cake:return{ ...state,numOfCakeTest:numOfCakeTest - 1};
        default: return state;
      }
  }

  return(
    <h1>barinda system sylvere</h1>
  )
}