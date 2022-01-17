import React, { memo } from 'react';
import { products } from '../utils/data.js';
import './css/SideFilter.css';
const sizesArr = products.map((item) => item.size);
const SizeFilter = memo(({ setSideFilterConfig, sideFilterConfig }) => {
  const sizeChangeHandler = (item, index) => {
    if (sideFilterConfig.size.includes(item)) {
      document
        .getElementById(`size-square-${index}`)
        .classList.remove('selected');

      sideFilterConfig.size.splice(sideFilterConfig.size.indexOf(item), 1);

      setSideFilterConfig({
        ...sideFilterConfig,
        size: sideFilterConfig.size,
      });
    } else {
      document.getElementById(`size-square-${index}`).classList.add('selected');
      setSideFilterConfig((prev) => {
        return {
          ...prev,
          ...prev.size.push(item),
        };
      });
    }
  };

  return (
    <div className="size">
      <p>
        <strong>Size</strong>
      </p>
      <div className="size-filter">
        {sizesArr.map((item, index) => (
          <div
            className="size-square"
            key={index}
            id={`size-square-${index}`}
            onClick={() => sizeChangeHandler(item, index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

export default SizeFilter;
