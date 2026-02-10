import React from "react";
import  { useState } from "react";

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



// this Calculator
// export default function Calculator() {
//   const [screen, setScreen] = React.useState("");

//   const handleClick = (value) => {
//     setScreen((prev) => prev + value);
//   };

//   const clearScreen = () => {
//     setScreen("");
//   };

//   const calculate = () => {
//     try {
//       setScreen(eval(screen).toString());
//     } catch {
//       setScreen("Error");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">

//       <div className="bg-white shadow-xl rounded-xl p-5 w-80">

//         {/* Screen */}
//         <div className="bg-black text-green-400 text-right p-3 rounded-lg text-xl font-mono mb-4">
//           {screen || "0"}
//         </div>

//         {/* Buttons Grid */}
//         <div className="grid grid-cols-3 gap-3">

//           {/* Numbers */}
//           {["9","8","7","6","5","4","3","2","1","0"].map((num) => (
//             <button
//               key={num}
//               onClick={() => handleClick(num)}
//               className="bg-gray-200 hover:bg-gray-300 p-3 rounded-lg text-lg font-bold"
//             >
//               {num}
//             </button>
//           ))}

//           {/* Operators */}
//           <button onClick={() => handleClick("+")} className="bg-blue-500 text-white p-3 rounded-lg">+</button>
//           <button onClick={() => handleClick("-")} className="bg-blue-500 text-white p-3 rounded-lg">-</button>
//           <button onClick={() => handleClick("*")} className="bg-blue-500 text-white p-3 rounded-lg">×</button>

//           {/* Extra */}
//           <button onClick={() => handleClick("%")} className="bg-yellow-400 p-3 rounded-lg">%</button>
//           <button onClick={() => handleClick(".")} className="bg-yellow-400 p-3 rounded-lg">.</button>
//           <button onClick={clearScreen} className="bg-red-500 text-white p-3 rounded-lg">CLS</button>

//         </div>

//         {/* Equal Button */}
//         <button
//           onClick={calculate}
//           className="mt-4 w-full bg-green-600 text-white p-3 rounded-lg text-xl font-bold hover:bg-green-700"
//         >
//           =
//         </button>

//       </div>
//     </div>
//   );
// }


// export default function MyApp(){
//     const[count,setCount] = React.useState(0);
//     const handleCount = () => { setCount(count + 1)}
//     return(
//         <>
//         <button count={count} onClick={handleCount}>{count}</button>
//         <button count={count} onClick={handleCount}>{count}</button>
//         </>
//     )
// }
// function MyButton(){

// }



// export default function MyApp() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <div>
//       <h1>Counters that update together</h1>
//       <MyButton count={count} onClick={handleClick} />
//       <MyButton count={count} onClick={handleClick} />
//     </div>
//   );
// }

// function MyButton({ count, onClick }) {
//   return (
//     <button onClick={onClick}>
//       Clicked {count} times
//     </button>
//   );
// }


// export default function myBarinda(){
//     const[count,setCount] = React.useState(0);
//     const handleClick = () => {
//       setCount(count + 1);
//     }
//     return(
//         <div className="h-50 w-40 border text-center">
//         <h1>Counters that update together</h1>
//              <MyButton count={count} onClick={handleClick} /> 
//              <MyButton count={count} onClick={handleClick} /> 
//         </div>
//     )
// }

// const MyButton = ({count,onClick}) => {
//    return(
//     <button className="h-10 w-10 border bg-amber-300" onClick={onClick}>{count}</button>
//    )
// }




// function Square({ value, onSquareClick }) {
//   return (
//     <button className="square" onClick={onSquareClick}>
//       {value}
//     </button>
//   );
// }

// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) return;

//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? "X" : "O";
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   const isDraw = !winner && squares.every(Boolean);

//   let status;
//   if (winner) {
//     status = "Winner: " + winner;
//   } else if (isDraw) {
//     status = "Draw!";
//   } else {
//     status = "Next player: " + (xIsNext ? "X" : "O");
//   }

//   return (
//     <>
//       <div className="status">{status}</div>

//       <div className="board-row">
//         <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
//         <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
//         <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
//       </div>

//       <div className="board-row">
//         <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
//         <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
//         <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
//       </div>

//       <div className="board-row">
//         <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
//         <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
//         <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
//       </div>
//     </>
//   );
// }

// export default function Game() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);

//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = history.slice(0, currentMove + 1).concat([nextSquares]);
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(move) {
//     setCurrentMove(move);
//   }

//   const moves = history.map((_, move) => (
//     <li key={move}>
//       <button onClick={() => jumpTo(move)}>
//         {move ? "Go to move #" + move : "Go to game start"}
//       </button>
//     </li>
//   ));

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board
//           xIsNext={xIsNext}
//           squares={currentSquares}
//           onPlay={handlePlay}
//         />
//       </div>

//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let [a, b, c] of lines) {
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }










// function Square({ value, onSquareClick }) {
//   return (
//     <button
//       onClick={onSquareClick}
//       className="w-16 h-16 border border-gray-500 text-2xl font-bold flex items-center justify-center hover:bg-gray-100"
//     >
//       {value}
//     </button>
//   );
// }


// function Board({ xIsNext, squares, onPlay }) {
//   function handleClick(i) {
//     if (calculateWinner(squares) || squares[i]) return;

//     const nextSquares = squares.slice();
//     nextSquares[i] = xIsNext ? "X" : "O";
//     onPlay(nextSquares);
//   }

//   const winner = calculateWinner(squares);
//   const status = winner
//     ? `Winner: ${winner}`
//     : `Next player: ${xIsNext ? "X" : "O"}`;

//   return (
//     <div>
//       <div className="mb-4 text-lg font-semibold">{status}</div>

//       <div className="grid grid-cols-3 gap-1">
//         {squares.map((value, i) => (
//           <Square
//             key={i}
//             value={value}
//             onSquareClick={() => handleClick(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// export default function App() {
//   const [history, setHistory] = useState([Array(9).fill(null)]);
//   const [currentMove, setCurrentMove] = useState(0);

//   const xIsNext = currentMove % 2 === 0;
//   const currentSquares = history[currentMove];

//   function handlePlay(nextSquares) {
//     const nextHistory = history
//       .slice(0, currentMove + 1)
//       .concat([nextSquares]);

//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//   }

//   function jumpTo(move) {
//     setCurrentMove(move);
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="flex gap-10 p-6 bg-white shadow rounded">
//         <Board
//           xIsNext={xIsNext}
//           squares={currentSquares}
//           onPlay={handlePlay}
//         />

//         <ol className="space-y-2">
//           {history.map((_, move) => (
//             <li key={move}>
//               <button
//                 onClick={() => jumpTo(move)}
//                 className="px-3 py-1 border rounded hover:bg-gray-100"
//               >
//                 {move === 0 ? "Go to start" : `Go to move #${move}`}
//               </button>
//             </li>
//           ))}
//         </ol>
//       </div>
//     </div>
//   );
// }

// /* ---------- Winner Logic ---------- */
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   for (let [a, b, c] of lines) {
//     if (
//       squares[a] &&
//       squares[a] === squares[b] &&
//       squares[a] === squares[c]
//     ) {
//       return squares[a];
//     }
//   }
//   return null;
// }
 function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>;

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
