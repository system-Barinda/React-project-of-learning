// import React, { useState, useEffect } from 'react';

// function App() {
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1); 
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1); 

//   const limit = 5; // users per page

//   useEffect(() => {
//     async function fetchPage() {
//       setLoading(true);
//       try {
        
//         const res = await fetch(`https://randomuser.me/api/?results=200`);
//         if (!res.ok) throw new Error('Failed to fetch');
//         const data = await res.json();

//         // manual pagination
//         const start = (page - 1) * limit;
//         const pageData = data.slice(start, start + limit);

//         setUsers(pageData);

        
//         setTotalPages(Math.ceil(data.length / limit));
//       } catch (err) {
//         console.log(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchPage();
//   }, [page]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
//         <h1 className="text-2xl font-bold mb-4 text-center">Users (Page {page})</h1>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading...</p>
//         ) : (
//           <ul className="space-y-4">
//             {users.map(user => (
//               <li
//                 key={user.id}
//                 className="p-4 bg-gray-50 rounded shadow hover:bg-gray-100 transition"
//               >
//                 <p className="font-medium">{user.username}</p>
//                 <p className="text-gray-500">{user.email}</p>
//               </li>
//             ))}
//           </ul>
//         )}

//         {/* Pagination Buttons */}
//         <div className="flex justify-center mt-6 space-x-2">
//           <button
//             onClick={() => setPage(prev => Math.max(prev - 1, 1))}
//             disabled={page === 1}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
//           >
//             Previous
//           </button>
//           <button
//             onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
//             disabled={page === totalPages}
//             className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';

function App() {
  const [allUsers, setAllUsers] = useState([]); // store all 200 users
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 5; // users per page

  // ✅ Fetch ONLY once
  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      try {
        const res = await fetch(`https://randomuser.me/api/?results=200`);
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();

        setAllUsers(data.results);
        setTotalPages(Math.ceil(data.results.length / limit));
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  // ✅ Paginate locally
  const start = (page - 1) * limit;
  const users = allUsers.slice(start, start + limit);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Users (Page {page})
        </h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : (
          <ul className="space-y-4">
            {users.map(user => (
              <li
                key={user.login.uuid}
                className="p-4 bg-gray-50 rounded shadow hover:bg-gray-100 transition"
              >
                <p className="font-medium">
                  {user.name.first} {user.name.last}
                </p>
                <p className="text-gray-500">{user.email}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>

          <button
            onClick={() =>
              setPage(prev => Math.min(prev + 1, totalPages))
            }
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>

        {/* Page Info */}
        <p className="text-center mt-4 text-gray-500">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

export default App;