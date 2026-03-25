import { useEffect } from "react";

export default function Dashboard() {

  const getProtectedData = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/protected",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await res.json();

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProtectedData();
  }, []);

  return <h1>Dashboard</h1>;
}