import { useState,useEffect } from "react";

const TabManager = () => {
    const[name,setName] = useState('');

    useEffect(() => {
    console.log("Effect running! Current name:", name);
    document.title = name ? `hello, ${name}` : "Please login";

    return () => {
      console.log("Cleanup: Tab title reset");
      document.title = "React App";
    };
  }, [name]);
    return(
        <div>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
        </div>
    );
}
export default TabManager;