import { useDispatch, useSelector } from "react-redux";

export default function UserPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>The page of user data</h1>
      <br />
      <strong>The name: {user.name}</strong>
    </div>
  );
}