import React, { useState } from 'react';

function SearchList() {
  const [searchTerm, setSearchTerm] = useState("");

  const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

 
  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Names</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;
