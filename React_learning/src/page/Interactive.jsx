import { useEffect, useRef, useState } from "react";

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


// export default function Interactive() {
//   const countRef = useRef(0);

//   const increment = () => {
//     countRef.current += 1;
//     console.log(countRef.current);
//   };

//   return <button onClick={increment}>Click</button>;
// }


// export default function Interactive(){
//     const countRef = useRef(0);
//     const handleClick = () => {
//         countRef.current += 2;
//     }
//     console.log(countRef.current)
//     return(
//         <div className="h-200 w-300 bg-amber-300">
//        <button className=" h-20 w-50 border" onClick={handleClick}>add number</button>

//        {countRef.current}
//         </div>
//     )
// }

// export default function Interactive(){
//     const[count,setCount] = useState(0);
//     const preve = useRef(null);
    
    
//         useEffect(() => {
//             preve.current = count;
//             setCount(count + 1);
//         },[count])
//     const handleIncrement = () => {
//         setCount(count + 1);
//     }
//     return(
       

//         <div className="h-200 w-300 bg-amber-300">
//          <button  className=" h-20 w-50 border" onClick={handleIncrement}>increment</button>
//          <p>Current: {count}</p>
//          <p>Previous: {preve.current}</p>
//          </div>
//     )
// }



// export default function Interactive() {
//   const [count, setCount] = useState(0);
//   const prevCount = useRef(null);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   return (
//     <div>
//       <p>Current: {count}</p>
//       <p>Previous: {prevCount.current}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//     </div>
//   );
// }
