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

   const currentItem = data.slice(startIndex,endIndex);
const handleLeft = () => {
    setCurrentPage(prev => prev - 1);
}
const handleRight = () => {
    setCurrentPage(prev => prev + 1);
}
   return(<>
    <div className="flex">
       <CardUser user={currentItem} />

       
    </div>

    <div className="shadow-2xs h-20 w-80 mx-auto bg-gray-300 mt-10 flx items-center justify-center text-center">
     <button disabled={currentPage === 1} onClick={handleLeft} className="m-5 border h-10 w-10"> ⬅️</button>
     <span className="border">page {currentPage}  of {totalPage} </span>
     <button disabled={currentPage === totalPage} onClick={handleRight} className="m-5 border h-10 w-10"> ➡️ </button>
    </div>
   </>)
}