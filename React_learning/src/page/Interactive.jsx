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

// export default function Interactive(){
//     const count = useRef(0);
//    const increment = () => {
//      count.current += 1;
//    }
//    console.log(count.current);
//     return(
//         <div>
//             <button onClick={increment}>click</button>

//             <p>count:</p>
//         </div>
//     )
// }


export default function Interactive() {
  const countRef = useRef(0);

  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  return <button onClick={increment}>Click</button>;
}

