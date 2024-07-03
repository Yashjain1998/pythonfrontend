import React from 'react';

const ResultComponent = ({ data }) => {
  console.log(data)
  return (
    <div>
    <h2>Generated Health Plan</h2>
    <div>
      {data.health_plans && data.health_plans.length > 0 ? (
        data.health_plans.map((plan, index) => (
          <p key={index}>{plan}</p>
        ))
      ) : (
        <p>No health plans available.</p>
      )}
    </div>
  </div>
  );
};

export default ResultComponent;
