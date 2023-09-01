import React from 'react';

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };

  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={handleCategoryChange}>
        {/* Add your options here */}
      </select>
    </div>
  );
}

export default Filter;
