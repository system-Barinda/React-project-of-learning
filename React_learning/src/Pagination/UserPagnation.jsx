import CardUser from "./CardUser"
import users from "./users"
export default function UserPagnation(){
   const data = users
   
   return(
    <>
       <CardUser user={data}/>
    </>
   )
}