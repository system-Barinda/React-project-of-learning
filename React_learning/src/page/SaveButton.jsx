// import { useEffect, useState } from "react"

import { useEffect, useState } from "react";

// export default function SaveButton(){
//     const[isOnline,setIsOnline] = useState(true)

//     useEffect(() => {
//         function handleOnline(){
//             setIsOnline(true);
//         }
//         function handleOffline(){
//             setIsOnline(false);
//         }

//         window.addEventListener('online',handleOnline);
//         window.addEventListener('offline',handleOffline);

//         return () => {
//             window.removeEventListener('online',handleOnline);
//             window.removeEventListener('offline',handleOffline);
//         }

//     },[]);

//     const handleBTN = () => {
//       if(isOnline === true){
//         setIsOnline(false);
//       }
//       else{
//         setIsOnline(true)
//       }
//     }

//     return(
//         <button onClick={handleBTN} className="border h-20 w-30 mx-auto">{isOnline ? '👍 online' : '❌ Desconnected'}</button>
//     )
// }

// import { useState, useEffect } from "react";

// const useOnlineStatus = () => {
//   const [isOnline, setIsOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }

//     function handleOffline() {
//       setIsOnline(false);
//     }

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return isOnline;
// };

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log("✅ Progress saved");
//   }

//   return (
//     <button  onClick={handleSaveClick}>
//       {isOnline ? "Save progress" : "Reconnecting..."}
//     </button>
//   );
// }

// export default SaveButton;




const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};




function SaveButton() {
  const [isOnline,setIsOnline] = useOnlineStatus(true);

  function handleSaveClick() {
    if(isOnline === 'true'){
        setIsOnline(false);
    }
    else{
        setIsOnline(true)
    }
  }


  return (
    <button  onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}

export default SaveButton;