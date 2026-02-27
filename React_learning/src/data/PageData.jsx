import { people } from "./data";
import   th from "./th.jpg"

function getImageUrl(person) {
  return 'https://i.imgur.com/' + person.imageId + 's.jpg';
}

export default function PageData (){
  const listItem = people.map(person => 
    <li key={person.id}>
        {/* 3. Call the helper function here */}
        <img src={getImageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}</b> known for {person.accomplishment}
        </p>
    </li>
  )
  return <ul>{listItem}</ul>
}