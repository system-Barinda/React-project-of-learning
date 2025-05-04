import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const removeItem = (itemToRemove) => {
 
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
  };

  return (
    <div>
      <h2>Fruits</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
