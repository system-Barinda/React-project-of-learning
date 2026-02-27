export default function Card(props){
    return(
        <div className="border h-50 h-100 ">
            <div className="imgDiv border h-20 w-[100%] m-2"></div>
            <div className="detailes border">
                <p>name:</p>
                <p>price:</p>
                <button>buy</button>
            </div>
        </div>
    )
}