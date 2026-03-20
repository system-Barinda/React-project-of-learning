import { useDispatch } from "react-redux";
import { login } from "../features/Peaple"; 

export default function ButtonLogin() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = {
      name: "John Doe",
      age: 25,
      email: "john@example.com"
    };

    dispatch(login(userData));
  };

    const handleLogout = () => {
    const userData = {
      name: "",
      age: 0,
      email: ""
    };

    dispatch(login(userData));
  };
  return (<div>
    <button onClick={handleLogin}>
      Login
    </button>
    <button onClick={handleLogout}>
      Logout
    </button>
    </div>
  );
}