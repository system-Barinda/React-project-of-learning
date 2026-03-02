// import UserCard from "./UserCard";

// export default function App() {
//   return (
//     <UserCard 
//       name="Sylvere"
//       age={21}
//     />
//   );
// }


// import UserCard from "./UserCard"

// export default function App(){
//   return(
//     <UserCard 
//     name="barinda"
//     age={20}
//     location="muhanga"
//     />
//   )
// }

import UserCard from "./UserCard"

export default function App(){
  const data = {
    name:'barinda system system',
    age:21,
    location:'muhanga'
  }
  return(
    <UserCard 
        data={data}
    />
  )
}