// Filter.js
import React from 'react';

const Filter = ({ filterTitle, filterRating, onFilterTitleChange, onFilterRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={filterTitle}
        onChange={(e) => onFilterTitleChange(e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={filterRating}
        onChange={(e) => onFilterRatingChange(e.target.value)}
      />
    </div>
  );
};

export default Filter;
