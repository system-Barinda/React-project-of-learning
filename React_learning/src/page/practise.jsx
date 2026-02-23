import { useState } from "react";
import React from "react";
// export default function Barinda(){
//     const ingredients = ["Chicken", "Oregano", "Tomatoes"];
//     const[items,setItemes] = useState(ingredients);

//     const ingredi = items.map((item) => {
//         return<li key={item}>{item}</li>
//     })

//     const handleSubmitt = (event) => {
//    event.preventDefault();
//    const dataForm = new FormData(event.currentTarget);
//    let newItem = dataForm.get("item");
//    setItemes(prev => [...prev,newItem]);
//     }
   
//     return(
//         <>
//              <div className="flex ">
//                 <form action="" onSubmit={handleSubmitt}>
//                 <input type="text"
//                 name="item"
//                 placeholder="enter the ingradient"
//                 className="border h-10 w-50 mr-5" />
//                 <button className="border" type="submit"> add items</button></form>
//              </div>

//              <div className="result">
//               {ingredi}
//              </div>
//         </>
//     )
// }
export default function Barinda(){
 const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });

   const allCantact = (
    <div className="h-100 w-100 border shadow-2xl rounded-2xl">
        <h1>{contact.firstName}</h1>
        <h1>{contact.lastName}</h1>
        <p>{contact.phone}</p>
        <strong>{contact.email}</strong>
        {/* Boolean values like isFavorite won't render; use a string or icon */}
        <p>Favorite: {contact.isFavorite ? "Yes" : "No"}</p>
    </div>
);
return(
    <main className="p-10">
            {/* 1. The Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-10 border p-5 rounded-lg">
                <input name="firstName" placeholder="First Name" className="border p-2" required />
                <input name="lastName" placeholder="Last Name" className="border p-2" required />
                <input name="phone" placeholder="Phone" className="border p-2" />
                <input name="email" type="email" placeholder="Email" className="border p-2" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update Contact</button>
            </form>

            <hr className="my-10" />

            {/* 2. The Display Card */}
            <div className="h-100 w-100 border shadow-2xl rounded-2xl p-6">
                <h1 className="text-2xl font-bold">{contact.firstName} {contact.lastName}</h1>
                <p>📞 {contact.phone}</p>
                <strong>📧 {contact.email}</strong>
                <p>Favorite: {contact.isFavorite ? "⭐️ Yes" : "☆ No"}</p>
            </div>
        </main>
)
}