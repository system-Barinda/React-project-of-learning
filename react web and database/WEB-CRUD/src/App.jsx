import thunk from "redux-thunk"; 
import { createStore, applyMiddleware } from "react-redux" 

import axios from "axios";       

const initialState = {
  loading: false,
  users: [], 
  error: ''
};



const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = users => ({ type: FETCH_USERS_SUCCESS, payload: users });
const fetchUserFailure = error => ({ type: FETCH_USERS_FAILURE, payload: error });


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: return { ...state, loading: true };
    case FETCH_USERS_SUCCESS: return { loading: false, users: action.payload, error: '' };
    case FETCH_USERS_FAILURE: return { loading: false, users: [], error: action.payload };
    default: return state; 
  }
}


const fetchUsers = () => {
  return function(dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data.map(user => user.id);
        dispatch(fetchUsersSuccess(users)); 
      })
      .catch(error => {
        dispatch(fetchUserFailure(error.message));
      });
  }
}


const store = createStore (reducer, applyMiddleware(thunk));

export default function App() {
  
  
  const handleFetch = () => {
    store.dispatch(fetchUsers());
  };


  store.subscribe(() => console.log('State Updated:', store.getState()));

  return (
    <div>
      <h1>Barinda System Redux</h1>
      <button onClick={handleFetch}>Fetch Users</button>
    </div>
  );
}