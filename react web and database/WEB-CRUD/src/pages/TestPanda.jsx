import { createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

export default function App() {

  const initialStateValue = {
    loading: false,
    users: [],
    error: ""
  };

  const fetch_user_request = 'fetch_user_request';
  const fetch_user_success = 'fetch_user_success';
  const fetch_user_failure = 'fetch_user_failure';

  function fetchUserRequest() {
    return {
      type: fetch_user_request,
    };
  }

  function fetchUserSuccess(users) {
    return {
      type: fetch_user_success,
      payLoad: users
    };
  }

  function fetchUserFailure(error) {
    return {
      type: fetch_user_failure,
      payLoad: error
    };
  }

  const reducer = (state = initialStateValue, actions) => {
    switch (actions.type) {
      case fetch_user_request:
        return { ...state, loading: true };

      case fetch_user_success:
        return { loading: false, users: actions.payLoad, error: '' };

      case fetch_user_failure:
        return { loading: false, users: [], error: actions.payLoad };

      default:
        return state;
    }
  };

  const getAllData = () => {
    return async function (dispatch) {
      try {
        dispatch(fetchUserRequest());

        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
          return dispatch(fetchUserFailure('network fail in process of fetching data'));
        }

        const data = await res.json();
        const idData = data.map(user => user.id);

        dispatch(fetchUserSuccess(idData));

      } catch (err) {
        dispatch(fetchUserFailure(err.message));
      }
    };
  };
 
  const store = createStore(reducer, applyMiddleware(thunk));

  store.subscribe(() => console.log('state update:', store.getState()));

  store.dispatch(getAllData());

  console.log("done to get it", store.getState());

  return (
    <div>
      <button className="border h-10 w-50 m-10 cursor-pointer">
        get all users
      </button>
    </div>
  );
}