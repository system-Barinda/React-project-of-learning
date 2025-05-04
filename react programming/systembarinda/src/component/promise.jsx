import React, { useState } from 'react';

function AddWithPromise() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const addNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
      const number1 = parseFloat(a);
      const number2 = parseFloat(b);

      if (!isNaN(number1) && !isNaN(number2)) {
        resolve(number1 + number2);
      } else {
        reject('Please enter valid numbers.');
      }
    });
  };

  const handleAdd = () => {
    setResult(null);
    setError('');

    addNumbers(num1, num2)
      .then((sum) => setResult(sum))
      .catch((err) => setError(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Add Two Numbers (with Promise)</h2>
     &nbsp; <input
        type="text"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      /> <br /> <br />
      <input
        type="text"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginLeft: '10px' }}
      /> <br /><br />
      <button onClick={handleAdd} style={{ marginLeft: '10px' }}>
        Add
      </button>

      {result !== null && <p>Result: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AddWithPromise;
