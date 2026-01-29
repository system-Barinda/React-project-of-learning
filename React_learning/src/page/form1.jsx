import { useState } from "react";

function FormValidation() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Saved: ${fname} ${lname}`);
  };

  return (
    <div className="p-10 bg-slate-100 min-h-screen">
      <div className="container shadow-2xl bg-sky-200 text-black mx-auto p-4 rounded-lg max-w-lg">
        <h1 className="font-bold m-2 text-center text-xl">Register Student</h1> 
        <hr className="border-sky-300" />

        <form onSubmit={handleSubmit} className="text-center p-4 space-y-4 bg-white mt-5 rounded shadow-inner">
          <input 
            type="text" 
            value={fname} 
            onChange={(e) => setFname(e.target.value)} 
            placeholder="First Name" 
            className="h-10 w-full bg-slate-50 border border-slate-300 rounded p-2 focus:outline-sky-500" 
          />
          <input 
            type="text" 
            value={lname} 
            onChange={(e) => setLname(e.target.value)} 
            placeholder="Last Name" 
            className="h-10 w-full bg-slate-50 border border-slate-300 rounded p-2 focus:outline-sky-500" 
          />
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            placeholder="Location" 
            className="h-10 w-full bg-slate-50 border border-slate-300 rounded p-2 focus:outline-sky-500" 
          />
          <input 
            type="text" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
            placeholder="Department" 
            className="h-10 w-full bg-slate-50 border border-slate-300 rounded p-2 focus:outline-sky-500" 
          />

          <button type="submit" className="w-full bg-amber-300 hover:bg-amber-400 font-bold py-2 rounded transition">
            SAVE
          </button>
        </form>

        {/* --- LIVE DISPLAY SECTION --- */}
        <div className="mt-10 p-4 bg-white rounded border-2 border-dashed border-sky-400">
          <h2 className="font-bold mb-2 text-sky-800">Live Preview:</h2>
          <p><strong>Full Name:</strong> {fname} {lname}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Department:</strong> {department}</p>
        </div>
      </div>
    </div>
  );
}

export default FormValidation;