import { people } from "./data";
import   th from "./th.jpg"

export default function PageData (){
 const listItem = people.map(person => 
    <li key={person.id}>
        <img src={th(person)}
             alt={person.name} />

              <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
    
 )
 return <ul>{listItem}</ul>
}