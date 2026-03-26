export function dataFetch() {
    return async function (dispatch) {
      try {
        dispatch(fetchuserrequest());

        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!res.ok) {
          return dispatch(fetchuserfailure('Failed to get all data'));
        }

        const data = await res.json();

        dispatch(fetchusersuccess(data));

      } catch (err) {
        dispatch(fetchuserfailure(err.message));
      }
    };
  }
  