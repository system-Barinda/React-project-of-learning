export default function CardUser({user}){
    const listUser = user.map((person) => {
        return(
        <div key={person.id} className="border h-80 w-80">
          <p><strong>first name:</strong></p>
          <p><strong>last name:</strong></p>
          <p><strong>username:</strong></p>
          <p><strong>user email:</strong></p>
        </div>
        
        )
    })
    return(
          {listUser}
        
    )
}