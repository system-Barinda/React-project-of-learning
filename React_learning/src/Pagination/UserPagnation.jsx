import users from "./users"
export default function UserPagnation(){
    console.log(users[0].name)
    return(<ol>
        {users.forEach((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ol>)
}