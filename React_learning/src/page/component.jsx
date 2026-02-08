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


export default function Calculator(){
      const [screen, setScreen] = React.useState("");

      const handleClick = (value) => {
        setScreen((prev) => prev + value);
      }
      const clearScreen = () => {
        setScreen("");
      }

     const calculate = () => {
        try{
            setScreen(eval(screen).toString());
        }
        catch{
            setScreen("Error");
        }

     }

    return(
        <div className="container h-100 w-80 border m-5">
      <div className="screen border m-4 h-10 w-[90%] p-2">
        {screen}
      </div>

      <div className="containerBTN m-4 w-[90%] border">

        {/* Numbers */}
        <div className="flex m-2">
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("7")}>7</button>
        </div>

        <div className="flex m-2">
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("4")}>4</button>
        </div>

        <div className="flex m-2">
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("1")}>1</button>
        </div>

        {/* Operations */}
        <div className="flex m-2">
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>×</button>
        </div>

        {/* Extra */}
        <div className="flex m-2">
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={clearScreen}>CLS</button>
        </div>

        {/* Equal */}
        <div className="flex m-2">
          <button onClick={calculate} className="w-full">
            =
          </button>
        </div>

      </div>
    </div>
    )
}