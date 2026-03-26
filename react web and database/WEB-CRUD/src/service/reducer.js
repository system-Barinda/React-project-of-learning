import { initialValue, allFetchs } from "./service";

const rootReducer = (state = initialValue, action) => {
  switch (action.type) {

    case allFetchs.fetch_user_request:
      return {
        ...state,
        loading: true,
        error: null
      };

    case allFetchs.fetch_user_success:
      return {
        ...state,
        loading: false,
        users: action.payload, 
        error: null
      };

    case allFetchs.fetch_user_failure:
      return {
        ...state,
        loading: false,
        users: [], 
        error: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;