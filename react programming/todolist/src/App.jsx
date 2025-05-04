import React, { useState } from "react";

const App = () => {
  const [isVisible, setIsVisible ] = useState(false);
const toggleOperation = () => {
  setIsVisible(prev => !prev);
}

return( 
<>
<button onClick={toggleOperation}>
  {isVisible ? 'hide the content' : ' show the content'}
</button>
<br />

{
  isVisible && (
<div>
  dsfjhlfhakjhfadkjhfgahjkgadfjgl
  <br />
  <h1>barinda system sylvere</h1> <hr />
  <p>additional operation</p>
</div>
  )
}

</>
);
};
export default App;