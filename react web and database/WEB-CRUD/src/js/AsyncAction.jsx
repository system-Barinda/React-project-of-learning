import { createStore, applyMiddleware } from "redux"; 
import thunk from "redux-thunk"; // Fixed import
import axios from "axios";       // Fixed import

const initialState = {
  loading: false,
  users: [], 
  error: ''
};

// 1. Action Constants
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// 2. Action Creators
const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
const fetchUserFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error });

// 3. Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: return { ...state, loading: true };
    case FETCH_USERS_SUCCESS: return { loading: false, users: action.payload, error: '' };
    case FETCH_USERS_FAILURE: return { loading: false, users: [], error: action.payload };
    default: return state; 
  }
}

// 4. Async Action Creator (Thunk)
const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data.map(user => user.id);
        dispatch(fetchUsersSuccess(users)); // Pass the data here!
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  }
}

// 5. Store Creation (Moved outside the component)
const store = createStore(reducer, applyMiddleware(thunk));

export default function AsyncAction() {
  
  // Example of how you'd actually trigger this in React
  const handleFetch = () => {
    store.dispatch(fetchUsers());
  };

  // Log the state whenever it changes
  store.subscribe(() => console.log('State Updated:', store.getState()));

  return (
    <div>
      <h1>Barinda System Redux</h1>
      <button onClick={handleFetch}>Fetch Users</button>
    </div>
  );
}