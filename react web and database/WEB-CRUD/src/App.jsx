import { createStore } from "redux";

export default function App() {

  const TEST_CAKE = 'TEST_CAKE';

  const initialState = {
    numOfCakeTest: 20,
  };

  function Test_Cake() {
    return {
      type: TEST_CAKE,
      info: 'done only'
    };
  }

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case TEST_CAKE:
        return {
          ...state,
          numOfCakeTest: state.numOfCakeTest - 1
        };
      default:
        return state;
    }
  };

  const store = createStore(reducer);

  console.log("Before:", store.getState());

  
  store.dispatch(Test_Cake());

  console.log("After:", store.getState());

  return (
    <h1>barinda system sylvere</h1>
  );
}