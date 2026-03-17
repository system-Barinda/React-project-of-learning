import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1); // current page
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1); // if API provides total pages

  const limit = 5; // users per page

  useEffect(() => {
    async function fetchPage() {
      setLoading(true);
      try {
        // Replace URL with your API that supports page & limit
        const res = await fetch(`https://fakestoreapi.com/users?limit=${limit}&page=${page}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();

        setUsers(data);

        // If API provides total items, you can calculate totalPages
        // For example: setTotalPages(Math.ceil(totalItems / limit));
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPage();
  }, [page]); // run whenever page changes

  return (
    <div className="App">
      <h1>Users (Page {page})</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      )}

      <div className="pagination">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>
        <button onClick={() => setPage(prev => prev + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;