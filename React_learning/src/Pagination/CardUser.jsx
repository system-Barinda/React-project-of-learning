export default function CardUser({ user }) {
    const listUser = user.map((person) => {
        
        return (
            <div key={person.id} className="border h-80 w-80 p-4 m-2">
                <p><strong>First name:</strong> {person.name.firstname}</p>
                <p><strong>Last name:</strong> {person.name.lastname}</p>
                <p><strong>Username:</strong> {person.username}</p>
                <p><strong>User email:</strong> {person.email}</p>
            </div>
        );
    });

    return (
        <>
            {listUser}
        </>
    );
}