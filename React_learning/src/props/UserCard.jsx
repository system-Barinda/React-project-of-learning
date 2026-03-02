// export default function UserCard(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }


export default function UserCard({name,age,location}){
  return(<>
    <h1>name :{name}</h1>
    <p>age:{age}</p>
    <strong>location:{location}</strong>
  </>)
}