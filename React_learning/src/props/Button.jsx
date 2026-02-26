export default function Button(value){
    const [id,color,on] = value
    console.log(id)
    return(
        <button key={value.id} className="border h-30 w-40 ">{}</button>
    )
}