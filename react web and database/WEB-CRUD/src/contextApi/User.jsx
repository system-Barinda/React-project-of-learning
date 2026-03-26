import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function User() {
  const { users, loading, error } = useContext(UserContext);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <div>
      {users.map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}