export default function Card({ data }) {
    return (
        <>
            {data.map((product) => (
                <div key={product.id} className="border h-80 w-70 m-4 p-2">
                    <div className="imgDiv border h-40 w-[90%] m-2">
                        <img 
                            src={product.image} 
                            alt={product.title} 
                            className="h-full mx-auto"
                        />
                    </div>

                    <div className="details border h-20 w-[90%] m-2">
                        <p>Title: {product.title}</p>
                        <p>Price: ${product.price}</p>
                        <button>Buy</button>
                    </div>
                </div>
            ))}
        </>
    );
}