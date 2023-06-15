import React from 'react';

const Categories = ({ categories, filterItems }) => {
  const toUpper = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            className='filter-btn'
            key={index}
            onClick={() => {
              filterItems(category);
            }}
          >
            {toUpper(category)}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
