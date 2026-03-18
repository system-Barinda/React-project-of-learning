import React, { useState } from "react";
import PageUserForm from "./page/pageUserForm";

export default function App() {
  const [showForm, setShowForm] = useState(false); // state to toggle form

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      {/* Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Add User
        </button>
        <button
          onClick={() => alert("Delete functionality not implemented")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Delete User
        </button>
      </div>

      {/* Conditionally render the form */}
      {showForm && <PageUserForm />}
    </div>
  );
}
