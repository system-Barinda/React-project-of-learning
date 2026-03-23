function App(){
  const getMoney = "withdraws";
  const initialState = { AmounOfMoney:2000};
  function AccessWithdraws(){
    return {
      type:getMoney,
      info:"you have made withdraw seccefful",
    }
  }
  
  return(
    <h1>barinda</h1>
  )
}

export default App;