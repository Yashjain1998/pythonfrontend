import React, { useState } from 'react';

const FormComponent = ({ onResponse }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://10.10.10.3:5000/generate_health_plans', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });
    const data = await response.json();
    onResponse(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Query:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Generate Plan</button>
    </form>
  );
};

export default FormComponent;
