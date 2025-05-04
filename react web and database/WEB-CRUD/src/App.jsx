import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/users")
    .then((Response)=>Response.json())
    .then((data)=>{
      console.log(data)
    })
    .catch((err)=>{
        console.log(err.message)
    })


    // squelize


      // .then((res) => {
      //   if (!res.ok) throw new Error("Failed to fetch");
      //   return res.json();
      // })
      // .then((data) => {
      //   setUsers(data.users);
      //   console.log(data.users);
      //   setLoading(false);
      // })
      // .catch((err) => {
      //   console.error("Fetch error:", err);
      //   setLoading(false);
      // });
  }, []);

  // if (loading) return <p>Loading...</p>;

  // return (
  //   <div>
  //     <h1>Users from Backend:</h1>
  //     {users.map((user, i) => (
  //       <p key={i}>{user}</p>
  //     ))}
  //   </div>
  // );
}

export default App;
