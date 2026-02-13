export default function Card({ value }) {
  return (
    <div className="max-w-sm bg-slate-300 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl mx-auto transition-shadow">
      
      <img
        src={value.image}
        alt="Product"
        className="w-full h-48 object-cover bg-gray-200"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">
          {value.title}
        </h2>

        <p className="text-blue-600 font-bold text-lg">
          ${value.price}
        </p>

        <p className="text-sm text-gray-600">
          {value.description}
        </p>

        <div className="flex justify-between text-sm text-gray-500 pt-2">
          <span>{value.category}</span>
          <span>⭐ {value.rating?.rate}</span>
        </div>
      </div>
    </div>
  );
}
