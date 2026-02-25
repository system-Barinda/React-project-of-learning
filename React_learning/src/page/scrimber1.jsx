// import React from "react"
// export default function App() {
//     const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
//     return (
//         <div>
//             <h1>{unreadMessages}</h1>
//         </div>
//     )
// }

import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(true)
    
     function toggleBtn(){
        if(unreadMessages === true) {setUnreadMessages(false)}
    else {setUnreadMessages(true)}
        
     }
    
    return (
        <div>
          <button className="border" onClick={toggleBtn}>{unreadMessages ? "hide" : "show"}panchline</button>
        </div>
    )
}