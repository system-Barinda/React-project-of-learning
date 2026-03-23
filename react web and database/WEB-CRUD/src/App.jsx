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



  return(
    <h1>barinda</h1>
  )
}

export default App;