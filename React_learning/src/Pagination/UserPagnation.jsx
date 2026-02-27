import { useState } from "react"
import CardUser from "./CardUser"
import users from "./users"
export default function UserPagnation(){
   const data = users
   
   const[currentPage,setCurrentPage] = useState(1);
   const itemParPage = 5;

   const totalPage = Math.ceil(data.length / itemParPage);
   const startIndex = (currentPage - 1) * itemParPage;
   const endIndex =  startIndex + itemParPage;

   currentItem = data.slice(startIndex,endIndex);
   
   return(
    <>
       <CardUser user={currentItem} />
    </>
   )
}