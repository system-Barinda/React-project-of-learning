import { useRef, useState } from "react";

// export default function Interactive() {
//   const [data, setData] = useState([]);
//   const name = "barinda system sylvere";

//   const handleButton = () => {
//     setData(prev => [...prev, name]); 
//   };

//   return (
//     <div>
//       <button onClick={handleButton}>add barinda</button>

//       {data.map((el, index) => (
//         <button key={index}>{el}</button>
//       ))}
//     </div>
//   );
// }

export default function Interactive(){
    const myRef = useRef(initiation);
    console.log(myRef)
    return(
        <>
        </>
    )
}
