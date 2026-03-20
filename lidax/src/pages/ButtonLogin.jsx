import { useDispatch } from "react-redux";
import { login } from "../features/Peaple"; // adjust path if needed

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

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}