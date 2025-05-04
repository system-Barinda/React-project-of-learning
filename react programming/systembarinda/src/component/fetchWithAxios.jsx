import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDisplay() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        setUserData(response.data);
      } catch (err) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>User Info:</h2>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
}

export default UserDisplay;
