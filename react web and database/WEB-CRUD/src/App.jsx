import {createStore} from "redux";

function App(){
  const Get_money = 'make withdraws';

  function withdrow(){
    return{
      type:Get_money,
      info:'the money you have is there'
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

      }
  }

  const store = createStore(reducer);
  store.subscribe(() => console.log('initial money',store.getState()));
  store.dispatch(withdrow())
  console.log('initial money',store.getState());
  
  return(
    <h1>barinda system sylvere</h1>
  )
}
export default App;