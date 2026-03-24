const initialState = {
    loading:false,
    users:[data],
    error:''
};

const   fetch_users_request = 'fetch_users_request'
const   fetch_users_success = 'fetch_users_success'
const   fetch_users_failure = 'fetch_users_failure'


const fetchUsersRequest = () => {
    return{
        type:fetch_users_request,
    }
}

const fetchUsersSuccess = users => {
    return {
        type:fetch_users_success,
        payLoad:users,
    }
}

const fetchUserFailure = error => {
    return{
        type:fetch_users_failure,
        payLoad:error
    }
}
const reducer = (state,action) => {
    switch(action.type){
        case fetch_users_request : return {...state,loading:true}
        case fetch_users_success : return {loading:false,users:action.payLoad,error:''}
        case fetch_users_failure : return {loading:false,users:[],error:action.payLoad}
    }
}