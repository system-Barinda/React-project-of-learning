import { useState } from "react";
import AddStudent from "./pages/AddStudent";

function App() {
  const [showForm, setShowForm] = useState(false); // ❌ was true

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Barinda System Sylvere
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="px-5 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add Student
        </button>

        <button
          onClick={() => setShowForm(false)}
          className="px-5 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          View Students
        </button>
      </div>

      {/* Content */}
      <div className="flex justify-center">
        {showForm ? (
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
            <AddStudent />
          </div>
        ) : (
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold text-gray-700">
              Click "Add Student" to open the form
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;