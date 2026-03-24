import { combineReducers, createStore ,applyMiddleware} from "redux";
import {createLogger} from "redux-logger"

function App() {
  const Logger = createLogger();
  // 1. Define all action types
  const Get_money = 'make withdraws';
  const Keep_money = 'keep money'; // Added missing definition

  // 2. Action Creators
  function withdrow() {
    return {
      type: Get_money,
      info: 'the money you have is there'
    }
  }

  function updateMoney() {
    return {
      type: Keep_money,
      info: 'you saved the money well'
    }
  }

  const intialState = {
    amount: 2000,
  };

  // 3. Reducers (Added default returns)
  const reducer = (state = intialState, actions) => {
    switch (actions.type) {
      case Get_money:
        return {
          ...state,
          amount: state.amount - 100
        }
      default:
        return state; // Crucial for Redux
    }
  }

  const reducerUpdate = (state = intialState, actions) => {
    switch (actions.type) {
      case Keep_money:
        return {
          ...state,
          amount: state.amount + 1000
        }
      default:
        return state; // Crucial for Redux
    }
  }

  // 4. Combine Reducers into a Root Reducer
  const rootReducer = combineReducers({
    withDraw: reducer,
    save: reducerUpdate,
  });

  // 5. Create the Store using the rootReducer
  const store = createStore(rootReducer,applyMiddleware(Logger));

  // 6. Test it
  console.log('Initial State:', store.getState());
  
  store.dispatch(withdrow());
  store.dispatch(updateMoney());
  
  console.log('Updated State:', store.getState());

  return (
    <h1>barinda system sylvere</h1>
  );
}

export default App;