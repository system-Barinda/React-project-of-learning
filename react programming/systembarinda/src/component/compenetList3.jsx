import React, { useState } from 'react';
const ListComponent = ({ items }) => { 
  const [isNumbered, setIsNumbered] = useState(true);
  const toggleListType = () => {
    setIsNumbered(!isNumbered);
  };
  return (
    <div>
      <button onClick={toggleListType}>
        Switch to {isNumbered ? 'Bullet' : 'Numbered'} List
      </button>
      <ul style={{ listStyleType: isNumbered ? 'decimal' : 'disc' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              margin: '5px 0',
              cursor: 'pointer',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => e.target.style.color = 'blue'}
            onMouseLeave={(e) => e.target.style.color = 'black'}
        >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListComponent;
