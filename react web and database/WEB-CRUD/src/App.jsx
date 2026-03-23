function App() {

  // action type (use uppercase convention)
  const BUY_CAKE = 'BUY_CAKE';

  // initial state
  const initialState = {
    numOfCakes: 10,
  };

  // reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE:
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1,
        };

      default:
        return state;
    }
  };

  // action creator
  function barindaCake() {
    return {
      type: BUY_CAKE,
      info: 'done to update it',
    };
  }

  console.log(barindaCake()); // check output
  console.log(initialState); // check output
  console.log(reducer()); // check output

  return (
    <h1>Barinda System Sylvere</h1>
  );
}

export default App;