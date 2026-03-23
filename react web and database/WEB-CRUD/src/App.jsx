function App(){
  const buy_cake = 'barinda system sylvere';

  const initialState = {
    numOfCakes:10,
  };
    
  const reducer =(state,action) ={

  };
  
   function barindaCake(){
    return{
      type:buy_cake,
      info:'done to update it',
    };
   }
   console.log(barindaCake().type);
  return(
    <h1>barinda system sylvere</h1>
  )
}
export default App;