import {createStore} from "redux";
function App(){
  const getMoney = "withdraws";

  const initialState = { AmounOfMoney:2000};

  function AccessWithdraws(){
    return {
      type:getMoney,
      info:"you have made withdraw seccefful",
    }
  }

const reducer = (state = initialState, actions) => {
     switch(actions.type){
      case getMoney :
        return {
          ...state,
          AmounOfMoney:state.AmounOfMoney - 100,
        };
      default:
        return state;  
     }
}

const store = createStore(reducer);

console.log('the initial value of state',store.getState());
store.dispatch(AccessWithdraws());
store.dispatch(AccessWithdraws());
 console.log('updated',store.getState())

  return(
    <h1>barinda</h1>
  )
}

export default App;