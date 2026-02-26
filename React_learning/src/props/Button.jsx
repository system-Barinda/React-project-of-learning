export default function Button(value){
   
    return(
        <button className="border h-30 w-40 ">{value.value.on ? "done" : "not yet done"}</button>
    )
}