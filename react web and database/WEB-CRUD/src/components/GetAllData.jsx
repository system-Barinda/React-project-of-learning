import { useDispatch, useSelector } from "react-redux";
import { dataFetch } from "../service/fetchUser";
import { useEffect } from "react";

export default function GetAllData() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dataFetch()); 
  }, [dispatch]); 

const {loading, users, error } = useSelector((state) => state)


   return (
    <div>
      <h2>Users List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}