import { useState, useEffect } from "react";

export default function StatusBar(){
    const[isOnline,setIsOnline] = useState(true)

    useEffect(() => {
        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false);
        }
    })
}