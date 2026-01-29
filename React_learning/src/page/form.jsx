import { useState } from "react";

function FormValidation (){
    return(
        <>
        <div className="container h-150 w-100 shadow-2xl bg-sky-200 text-black mx-auto">
            <h1 className=" font-bold m-2 text-center">register Student</h1> <hr />

            <form action="" method="post" className="text-center  h-100 p-2 gap-2 space-y-1 w-90 mx-auto mt-10 shadow-slate-200 bg-white">
                <input type="text" name="fname" placeholder="enter the first name" className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" /> <br />
                <input type="text" name="lname" placeholder="enter the last name" className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" /> <br />
                <input type="text" name="location" placeholder="enter the location" className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" /> <br />
                <input type="text" name="department" placeholder="enter the department" className="h-10 w-80 bg-slate-400 outline rounded m-2 p-2" /> <br />
                <button type="submit" className="h-10 w-50 text-2xl text-black bg-amber-300 m-2 p-2 cursor-pointer text-center rounded">save</button>
            </form>
        </div>
        </>
    );
}
export default FormValidation;