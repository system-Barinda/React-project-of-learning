// export default function UserCard(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }


// export default function UserCard({name,age,location}){
//   const alldata = {name,age,location}
//   console.log(alldata)
//   return(<>
//     <h1>name :{name}</h1>
//     <p>age:{age}</p>
//     <strong>location:{location}</strong>
//   </>)
// }

export default function UserCard({data}){
  
  return(<>
    <h1>name :{data.name}</h1>
    <p>age:{data.age}</p>
    <strong>location:{data.location}</strong>
  </>)
}
