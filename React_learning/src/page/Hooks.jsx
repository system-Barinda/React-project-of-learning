import React, { useState, useCallback, useReducer, useEffect } from "react";


// function Button ({onClick}){
//     console.log("buttone are rerendered");
//     return <Button onClick={onClick}>clicked me</Button>
// }
// export default function Hooks(){
//     const[count,setCount] = useState(0);
//     const handleClick = () => {
//         console.log('clicked');
//     }
//     return(
//         <>
//         <h1>{count}</h1>
//          <button onClick={handleClick} />
//          <button onClick={() => setCount(count + 1)}>click</button>
//         </>
//     )
// }




// const Button = React.memo(({ onClick }) => {
//   console.log("Button rendered");
//   return <button onClick={onClick}>Click me</button>;
// });


// export default function App() {
//   const [count, setCount] = useState(0);

//   const handleClick = useCallback(() => {
//     console.log("Button clicked");
//   }, [count]);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <Button onClick={handleClick} />
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
// }

// const Button = React.memo(({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className="h-20 w-32 bg-amber-700 text-slate-600"
//     >
//       Click me
//     </button>
//   );
// });
// export default function App(){
//     const[count,setCount] = useState(0);
//     const increment = useCallback(() => {
//         setCount(count + 1);
//     },[count]);
//     const handleClick = () => {
//         alert('barinda system sylvere')
//     }
//     console.log(count);
//     return(
//         <div className="h-100 w-200 bg-green-300 text-white mx-auto">
//            <Button onClick={handleClick} />
//           <button onClick={increment}>increment</button>
//         </div>
//     )
// }

// function reducer(state, action) {
//   if (action.type === 'incremented_age') {
//     return {
//       age: state.age + 1
//     };
//   }
//   throw Error('Unknown action.');
// }
// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });

//   return (
//     <>
//       <button onClick={() => {
//         dispatch({ type: 'incremented_age' })
//       }}>
//         Increment age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </>
//   );
// }

// const reducer = (state,act) => {
//   if(act.type === 'barinda') {return { age:state.age + 1};}
//   else if(act.type === 'decrement') {return {age:state.age - 1};}
//   throw Error('unknown type');
// }

// export default function Counter() {
//   const [state, dispatch] = useReducer(reducer, { age: 42 });
//   const handleClick = () => {
//     dispatch({type:'barinda'});
//   }
//   const handleClickDcrement = () => {
//      dispatch({type:'decrement'});
//   }


//   return (
//     <div className=" flex gap-2">
//       <button className="border" onClick={handleClick}>
//         Increment age
//       </button>
//       <button className="border" onClick={handleClickDcrement}>
//        decrement age
//       </button>
//       <p>Hello! You are {state.age}.</p>
//     </div>
//   );
// }

// const intialstatus = {
//     num:0
// }
// const reducer = (count,action) => {
//    switch(action.type){
//     case 'increment' : return {num:count.num + 1 }
//     case 'dicrement' : return {num:count.num - 1}
//     default:return count;
//    }
// }
// export default function Barinda(){
//     const[count,dispatch] = useReducer(reducer,intialstatus)


//     const increment = () => {dispatch({type:'increment'})}
//     const dicrement = () => {dispatch({type:'dicrement'})}
// return(
//     <div className="  mx-auto m-10 bg-sky-200 shadow h-100 w-100">
//          <button className="border h-10 w-20" onClick={increment}>+</button>
//          <button className="border h-10 w-20 ml-5"onClick={dicrement}>+</button>

//          <div className="h-30 w-30 mx-auto  shadow-lg shadow-green-500 mt-10 text-center">{count.num}</div>
//     </div>
// )
// }


// const initialState = {
//   loading: false,
//   error: null,
//   data: []
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_START":
//       return { ...state, loading: true, error: null };

//     case "FETCH_SUCCESS":
//       return { ...state, loading: false, data: action.payload };

//     case "FETCH_ERROR":
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };


// export default function FetchDataUsedUseReduce(){
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const[state,dispatch] = useReducer(reducer,initialState);

//   useEffect(() => {
//       const fetchData = async() => {
//         dispatch({ type: "FETCH_START" });
//         try{
//             const response = await fetch(url);
//             if(!response.ok) throw new Error('failed to fetch users');
           
//             const data = await response.json();
//              dispatch({ type: "FETCH_SUCCESS", payload: data });
//         }
//         catch(err){
//              dispatch({ type: "FETCH_ERROR", payload: err.message });
//         }
//       }
//       fetchData();
//   },[]);



//   const {loading,error,data} = state;
  
//     return(
//         <>
//         <h1>users got</h1>
//         {setTimeout(() => { loading && <p>Loading...</p> },2000)};
//       {error && <p className="text-red-600">{error}</p>}
//           <center>list of users <hr /></center>
//           <br />
//           <ul>
//         {data.map(user => (
//           <li key={user.id}>
//             {user.name} – {user.email}
//           </li>
//         ))}
//       </ul>
//         </>
//     )
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'incremented_age': {
//       return {
//         name: state.name,
//         age: state.age + 1
//       };
//     }
//     case 'changed_name': {
//       return {
//         name: action.nextName,
//         age: state.age
//       };
//     }
//   }
//   throw Error('Unknown action: ' + action.type);
// }

// const initialState = { name: 'Taylor', age: 42 };

// export default function Form() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleButtonClick() {
//     dispatch({ type: 'incremented_age' });
//   }

//   function handleInputChange(e) {
//     dispatch({
//       type: 'changed_name',
//       nextName: e.target.value
//     }); 
//   }

//   return (
//     <>
//       <input
//         value={state.name}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleButtonClick}>
//         Increment age
//       </button>
//       <p>Hello, {state.name}. You are {state.age}.</p>
//     </>
//   );
// }


