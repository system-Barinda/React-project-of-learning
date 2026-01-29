import { useState } from "react";

function FormValidation() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { fname, lname, location, department });
  };

  return (
    <div>
      <div className="container h-150 w-100 shadow-2xl bg-sky-200 text-black mx-auto">
        <h1 className="font-bold m-2 text-center">Register Student</h1> 
        <hr />

        <form onSubmit={handleSubmit} className="text-center h-100 p-2 gap-2 space-y-1 w-90 mx-auto mt-10 shadow-slate-200 bg-white">
          
          {/* Change value to the variable, and use onChange for the function */}
          <input 
            type="text" 
            name="fname" 
            value={fname} 
            onChange={(e) => setFname(e.target.value)} 
            placeholder="enter the first name" 
            className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" 
          /> <br />

          <input 
            type="text" 
            name="lname" 
            value={lname} 
            onChange={(e) => setLname(e.target.value)} 
            placeholder="enter the last name" 
            className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" 
          /> <br />

          <input 
            type="text" 
            name="location" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            placeholder="enter the location" 
            className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" 
          /> <br />

          <input 
            type="text" 
            name="department" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
            placeholder="enter the department" 
            className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" 
          /> <br />

          <button type="submit" className="h-10 w-50 text-2xl text-black bg-amber-300 m-2 p-2 cursor-pointer text-center rounded">
            save
          </button>
        </form>
        <div>
            {fname}
            {lname}
            {location}
            {department}
        </div>
      </div>
    </div>
  );
}

export default FormValidation;