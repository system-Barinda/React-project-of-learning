import { useState } from "react";

export default function Form3() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleFirst = (e) => {
    setFname(e.target.value);
  };

  const handleLast = (e) => {
    setLname(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    console.log("Submitted:", fname, lname);
  };

  return (
    <>
      <form
        className="shadow bg-gray-200 mx-auto h-60 w-100"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          onChange={handleFirst}
          placeholder="enter the first name"
          className="m-5 border-slate-300 border h-10 w-[90%]"
        />
        <br />

        <input
          type="text"
          onChange={handleLast}
          placeholder="enter the last name"
          className="m-5 border-slate-300 border h-10 w-[90%]"
        />
        <br />

        <input
          type="submit"
          value="send data"
          className="m-5 border h-10"
        />
      </form>

      <div>
        the first name: {fname} <br />
        the last name: {lname}
      </div>
    </>
  );
}

