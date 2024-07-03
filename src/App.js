import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ResultComponent from './components/ResultComponent';

const App = () => {
  const [response, setResponse] = useState(null);

  const handleResponse = (data) => {
    setResponse(data);
  };

  return (
    <div>
      <h1>Health Plan Generator</h1>
      <FormComponent onResponse={handleResponse} />
      {response && <ResultComponent data={response} />}
    </div>
  );
};

export default App;
