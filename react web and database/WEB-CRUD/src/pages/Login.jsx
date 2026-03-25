import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    localStorage.setItem("token", res.data.token);
    alert("Logged in!");
  };

  return (
    <div>
      <input placeholder="email" onChange={e => setUser({...user, email:e.target.value})} />
      <input type="password" placeholder="password" onChange={e => setUser({...user, password:e.target.value})} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}