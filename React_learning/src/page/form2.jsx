import { useState } from "react";

function FormValidation(){
    const [fname,setFname] = useState("");
    const hundleSubmit = (e) => {
       e.preventDefault();
        alert(fname);
    }
    return(
        <div>
            
            <form action="" method="post" onSubmit={hundleSubmit}>
                <input type="text" 
                                 value={fname} 
                                 onChange={(e) => setFname(e.target.value)}
                                 placeholder="enter first name" />
                <button type="submit">save</button>                 
            </form>
          {fname}
        </div>
    )
}
export default FormValidation;