import React from "react";

// function AboutPage() {
//   return (
//     <>
//       <h1>About</h1>
//       <p>Hello there.<br />How do you do?</p>
//     </>
//   );
// }


// function Counter() {
//   const [count, setCount] = React.useState(0);

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </>
//   );
// }



// function AdminPanel (){
//     return(
//         <>
//           the first condition appears
//         </>
//     )
// }
// function LoginForm(){
//     return(
//         <>
//          the second login occurred
//         </>
//     )
// }


// function MyButton() {
//   return (
//     <button className="round bg-amber-300">
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// }




// function Screen (){
//     return(
//         <>
//           <div className="barinda border h-30 w-40 rounded-2xl">
//             <h1> my name is barinda system sylvere are not allowed to do that</h1>

//           </div>
        
//         </>
//     )


// }




// function MyApp (){
//     const user = {
//     name:"barinda system sylvere",
//     imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
//     imageSize:90,
// };
//     let content;
//     const isLogin = false
//     if(isLogin){
//         content = <AdminPanel />
//     }
//     else{
//         content = <LoginForm />
//     }
//     return(
//         <>
//         <h1>{user.name}</h1>
//         <img className="avatar" src={user.imageUrl} alt={'photo of ' + user.name} style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }} />
      
//       <Counter />


//       <h1>hello this simple condition happening right now</h1>
//       {content}
//         </>
//     )
// }

// export default MyApp



// export default function Products(){
// const products = [
//   { title: 'Cabbage', id: 1 },
//   { title: 'Garlic', id: 2 },
//   { title: 'Apple', id: 3 },
// ];
// let listItem = products.map(a => <li>{a.id}</li>)
//     return(
//         <>
//         {listItem}
//         </>
//     )
// }

// export default function Products(){
//     const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];
//     return(
//         <>
//         {products.map(a => (
//             <li key={a.id} style={{
//                 color:a.isFruit ? "red" : "green"
//             }}>{a.title}</li>
//         ))}
//         </>
//     );
// }

// export default function events(){
//     function handleButton(){
//         alert('my name is barinda system sylvere');
//     }
//     return(
//         <>
//            <button onClick={handleButton} className="h-10 w-60 bg-gray-400 p-10 m-10 text-center cursor-pointer hover:green">add event</button>
//         </>
//     )
// }

// export default function MyButton(){
//     const[count,setCount] = React.useState(0);
//     function handleCount(){
//         setCount(count + 1);
//     }
//     function handleDecount(){
//         setCount(count - 1);
//     }
//     return(
//         <>
//         <button onClick={handleCount} className="h-10 w-10 bg-sky-300 m-5">+</button>
//         <button onClick={handleDecount} className="h-10 w-10 bg-sky-300 m-5">-</button>

//         <div className="h-20 w-20 bg-green-300 m-5 text-center">{count}</div>
//         </>
//     )
// }


export default function Calculator() {
  const [screen, setScreen] = React.useState("");

  const handleClick = (value) => {
    setScreen((prev) => prev + value);
  };

  const clearScreen = () => {
    setScreen("");
  };

  const calculate = () => {
    try {
      setScreen(eval(screen).toString());
    } catch {
      setScreen("Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-xl rounded-xl p-5 w-80">

        {/* Screen */}
        <div className="bg-black text-green-400 text-right p-3 rounded-lg text-xl font-mono mb-4">
          {screen || "0"}
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-3 gap-3">

          {/* Numbers */}
          {["9","8","7","6","5","4","3","2","1","0"].map((num) => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg text-lg font-bold"
            >
              {num}
            </button>
          ))}

          {/* Operators */}
          <button onClick={() => handleClick("+")} className="bg-blue-500 text-white p-3 rounded-lg">+</button>
          <button onClick={() => handleClick("-")} className="bg-blue-500 text-white p-3 rounded-lg">-</button>
          <button onClick={() => handleClick("*")} className="bg-blue-500 text-white p-3 rounded-lg">×</button>

          {/* Extra */}
          <button onClick={() => handleClick("%")} className="bg-yellow-400 p-3 rounded-lg">%</button>
          <button onClick={() => handleClick(".")} className="bg-yellow-400 p-3 rounded-lg">.</button>
          <button onClick={clearScreen} className="bg-red-500 text-white p-3 rounded-lg">CLS</button>

        </div>

        {/* Equal Button */}
        <button
          onClick={calculate}
          className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg text-xl font-bold hover:bg-green-700"
        >
          =
        </button>

      </div>
    </div>
  );
}