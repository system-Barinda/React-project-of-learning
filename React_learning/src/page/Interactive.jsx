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

// export default function Interactive(){
//  const inputRef = useRef(null);

//  const focusInput = () => {
//     inputRef.current.focus();
//  }
//     return(
//         <div>
//             <input ref={inputRef} />
//             <button onClick={focusInput}>focus</button>
//         </div>
//     )
// };

export default function Interactive(){
    return(
        <div>
            <button>click</button>

            <p>count:</p>{}
        </div>
    )
}

