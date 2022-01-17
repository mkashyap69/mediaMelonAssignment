import React, { useState, memo, useMemo } from 'react';

const RangeFilter = memo(({ setSideFilterConfig, sideFilterConfig }) => {
  const [range, setRange] = useState(800);
  const priceChangeHandler = (e) => {
    setRange(e.target.value);
    setSideFilterConfig((prev) => {
      return { ...prev, ...(prev.priceRange[1] = Number(e.target.value)) };
    });
  };

  return (
    <div className="price">
      <p>
        <strong>Price Range</strong>
      </p>
      <input
        type="range"
        id="price"
        min="0"
        max="800"
        value={range}
        onChange={priceChangeHandler}
      />
      <output htmlFor="price">
        $0 - <strong>${range}</strong>
      </output>
    </div>
  );
});

export default RangeFilter;
