export default function Card(props){
    return(
        <div className="border h-80 w-70 ">
            <div className="imgDiv border h-40 w-[90%] m-2"></div>
            <div className="detailes border h-20 w-[90%] m-2">
                <p>name:{props.name}</p>
                <p>price:</p>
                <button>buy</button>
            </div>
        </div>
    )
}