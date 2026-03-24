import { createStore,applyMiddleware } from "redux"; 
import {thunkMiddleware} from "redux-thunk"
import {axios} from "axios"


const initialState = {
    loading: false,
    users: [], // Changed from [data] to empty array
    error: ''
};

// 2. Action Constants
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

// 3. Action Creators
const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });

const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users 
});

const fetchUserFailure = error => ({
    type: FETCH_USERS_FAILURE,
    payload: error
});


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS: 
            return { loading: false, users: action.payload, error: '' };
        case FETCH_USERS_FAILURE: 
            return { loading: false, users: [], error: action.payload };
        default: 
            return state; 
    }
}


const fetchUser = () => {
    return function(dispach){
        
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware));