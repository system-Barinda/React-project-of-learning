export default function Card({props}) {
  return (
    <div className="max-w-sm bg-slate-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl mx-auto transition-shadow">
      
      {/* Image */}
      <img
        src={props.image}
        alt="Product"
        className="w-full h-48 object-cover bg-gray-200"
      />

      {/* Content */}
      <div className="p-4 space-y-2">
        
        <h2 className="text-lg font-semibold text-gray-800">
          Product Title {props.title}
        </h2>

        <p className="text-blue-600 font-bold text-lg">
          $99.99
        </p>

        <p className="text-sm text-gray-600">
          Short product description goes here. Clean and readable.
        </p>

        <div className="flex justify-between text-sm text-gray-500 pt-2">
          <span>Category</span>
          <span>⭐ 4.5</span>
        </div>

      </div>
    </div>
  );
}
