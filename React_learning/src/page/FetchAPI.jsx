import { useState, useEffect } from "react";

function UserProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result);
      } catch (err) { // Changed 'error' to 'err'
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <h1>loading user......</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      {/* Added ?. for safety */}
      <h1>user: {data?.name}</h1>
      <p>email: {data?.email}</p>
    </div>
  );
}

export default UserProfile;