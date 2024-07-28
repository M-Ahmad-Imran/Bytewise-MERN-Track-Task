import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="boxes">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="box">Box {index + 1}</div>
        ))}
      </div>
    </div>
  );
};

export default Home;
