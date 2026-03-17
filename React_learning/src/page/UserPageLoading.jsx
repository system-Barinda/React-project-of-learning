import { useState,useEffect } from "react";
export default function UserPageLoading(){

    const [users, setUsers] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllData();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
    if (loading) return <UserPageLoading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <h1>Users:</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}


async function getAllData() {
  try {
    const res = await fetch('https://fakestoreapi.com/users');
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw err; 
  }
}