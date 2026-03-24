import {combineReducers, createStore} from "redux";

function App(){
  const Get_money = 'make withdraws';
  const Keep_money = 'keep money';

  function withdrow(){
    return{
      type:Get_money,
      info:'the money you have is there'
    }
  }

  function updateMoney(){
    return{
      type:Keep_money,
      info:'you saved the money well'
    }
  }
  
  const intialState = {
    amount:2000,
  };

  const reducer = (state = intialState,actions) => {
      switch(actions.type){
        case Get_money : 
        return {
          ...state,
          amount:state.amount - 100
        }
        default:return state

      }
  }

    const reducerUpdate = (state = intialState,actions) => {
      switch(actions.type){
        case Keep_money : 
        return {
          ...state,
          amount:state.amount + 1000
        }
       default:return state
      }
  }


  const rootStore = combineReducers({
    withDraw:reducer,
    save:reducerUpdate,
  });
  const store = createStore(rootStore);
  store.subscribe(() =>  console.lopg('initial money',state.getState()))

  
  store.dispatch(withdrow())
  store.dispatch(updateMoney())
  console.log('initial money',store.getState());

  return(
    <h1>barinda system sylvere</h1>
  )
}
export default App;