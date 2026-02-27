export default function Card({ data }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col"
                    >
                        {/* Image */}
                        <div className="h-52 bg-gray-50 flex items-center justify-center p-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full object-contain"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-between flex-grow p-4">
                            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                                {product.title}
                            </h3>

                            <p className="text-lg font-bold text-indigo-600 mt-2">
                                ${product.price}
                            </p>

                            <button className="mt-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}