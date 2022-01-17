import React, { memo } from 'react';

const ContentHeader = memo(({ setSideFilterConfig }) => {
  const sortChangeHandler = (e) => {
    setSideFilterConfig((prev) => {
      return {
        ...prev,
        sort: e.target.value.split('-'),
      };
    });
  };
  return (
    <div className="content-header">
      <h3>New Arrivals</h3>
      <select name="sort" id="sort" onChange={sortChangeHandler}>
        <option value="createdAt-asc">What's New</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="price-asc">Price (Low to High)</option>
      </select>
    </div>
  );
});

export default ContentHeader;
