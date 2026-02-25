export default function Form3(){
    return(
        <form method="get" className="shadow bg-gray-200 mx-auto h-60 w-100">
            <input type="text" placeholder="enter the first name" className="m-5 border-slate-300 border h-10 w-[90%]" /> <br />
            <input type="text" placeholder="enter the last name" className="m-5 border-slate-300 border h-10 w-[90%]" /> <br />
            <input type="submit" value="send data" className="m-5 border h-10" />
        </form>
    )
}
