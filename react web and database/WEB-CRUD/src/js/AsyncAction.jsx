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