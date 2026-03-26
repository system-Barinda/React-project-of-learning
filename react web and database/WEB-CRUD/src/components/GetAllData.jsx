import { useDispatch, useSelector } from "react-redux";
import { dataFetch } from "../service/fetchUser";
import { useEffect } from "react";

export default function GetAllData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetch());
  }, [dispatch]);

  const { loading, users, error } = useSelector((state) => state);

  // ✅ Handle loading
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // ✅ Handle error
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>Users List</h2>

      {/* ✅ Safe check */}
      {users && users.length > 0 ? (
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}