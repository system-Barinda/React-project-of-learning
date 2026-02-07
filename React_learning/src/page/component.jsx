import React from "react";


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




function Screen (){
    return(
        <>
          <div className="barinda border h-30 w-40 rounded-2xl">
            <h1> my name is barinda system sylvere are not allowed to do that</h1>

          </div>
        
        </>
    )


}

function MyApp (){
    return(
        <>
        <Screen />
        <AboutPage />
        </>
    )
}

export default MyApp


function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

