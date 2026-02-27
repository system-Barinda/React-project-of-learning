export default function Card(props){
    const proje = props.data.map((user) => {
       return(<li key={user.id}>{user.name}</li>)
    })
    return(
        <div className="border h-80 w-70 ">
            <div className="imgDiv border h-40 w-[90%] m-2"></div>
            <div className="detailes border h-20 w-[90%] m-2">
                <p>name:{data}</p>
                <p>price:</p>
                <button>buy</button>
            </div>
        </div>
    )
}