import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    
   
    
    return (
        <div>
            <h1>{unreadMessages}</h1>
        </div>
    )
}