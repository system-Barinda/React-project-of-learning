import { useState } from "react";
import { css } from "../../styled-system/css";
import { stack } from "../../styled-system/patterns";
import axios from "axios"

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async() => {
    await  axios.post('http://localhost:5000/api/auth/register',user);
    alert('Registered');
  };





  return (
    <div className={stack({ gap: "4", p: "6", maxWidth: "400px" })}>
      <h2 className={css({ fontSize: "2xl", fontWeight: "bold", mb: "2" })}>
        Create an Account
      </h2>

      <input
        className={inputStyle}
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      
      <input
        className={inputStyle}
        placeholder="Email"
        type="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      
      <input
        className={inputStyle}
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      <button 
        className={buttonStyle} 
        onClick={handleSubmit}
      >
        Register
      </button>
    </div>
  );
}

// Reusable styles using Panda's css function
const inputStyle = css({
  border: "1px solid",
  borderColor: "gray.200",
  px: "4",
  py: "2",
  borderRadius: "md",
  _focus: { outline: "2px solid", outlineColor: "blue.500" },
});

const buttonStyle = css({
  bg: "blue.600",
  color: "white",
  py: "2",
  borderRadius: "md",
  cursor: "pointer",
  fontWeight: "medium",
  _hover: { bg: "blue.700" },
  _active: { transform: "scale(0.98)" },
});