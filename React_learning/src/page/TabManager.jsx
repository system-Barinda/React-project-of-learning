import { useState,useEffect } from "react";

const TabManager = () => {
    const[name,setName] = useState('');

    useEffect(() => {
        document.title = name ? `hello, ${name}` : "Please login";

        return () => {
            document.title = "React App";
        };
    },[name]);
    return(
        <div>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} />
        </div>
    );
}
export default TabManager;