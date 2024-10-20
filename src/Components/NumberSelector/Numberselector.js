import React, { useState } from 'react';
import './Numberselector.css';

const Numberselector = ({selectedNumberu , setSelectedNumberu, error}) => {
  const arr = [1, 2, 3, 4, 5, 6];

  // Function to handle click and update the selected number
  const handleClick = (item) => {
    setSelectedNumberu(item);
  };

  return (
    <>
    <p>{error}</p>
      <div id='boxes' >
        
        {arr.map((item, index) => (
          <div
            key={index}
            id='num'
            onClick={() => handleClick(item)}
            style={{
              backgroundColor: item === selectedNumberu ? 'black' : 'white',
              color: item === selectedNumberu ? 'white' : 'black',
              cursor: 'pointer',
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default Numberselector;
