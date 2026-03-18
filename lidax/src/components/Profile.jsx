import { useSelector} from "react-redux"
export default function Profile () {
    const user = useSelector((state) => state.user.value)
    return (<>
     <h1>the profile page</h1>
     <hr />

     <p>name: {user.name}</p>
     <p>age: {user.age}</p>
     <p>email: {user.email}</p>
    </>)
}