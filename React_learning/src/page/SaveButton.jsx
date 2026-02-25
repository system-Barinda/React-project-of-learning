import { useEffect, useState } from "react"

export default function SaveButton(){
    const[isOnline,setIsOnline] = useState(true)

    useEffect(() => {
        function handleOnline(){
            setIsOnline(true);
        }
        function handleOffline(){
            setIsOnline(false);
        }

        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOffline);

        return () => {
            window.removeEventListener('online',handleOnline);
            window.removeEventListener('offline',handleOffline);
        }

    },[]);

    const handleBTN = () => {
      if(isOnline === true){
        setIsOnline(false);
      }
      else{
        setIsOnline(true)
      }
    }

    return(
        <button onClick={handleBTN} className="border h-20 w-30 mx-auto">{isOnline ? '👍 online' : '❌ Desconnected'}</button>
    )
}