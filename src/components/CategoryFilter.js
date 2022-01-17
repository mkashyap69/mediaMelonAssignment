import React, { memo } from 'react';

const CategoryFilter = memo(({ setSideFilterConfig, sideFilterConfig }) => {
  const categoryChangeHandler = (e) => {
    if (sideFilterConfig.categories.includes(e.target.value)) {
      sideFilterConfig.categories.splice(
        sideFilterConfig.categories.indexOf(e.target.value),
        1
      );

      setSideFilterConfig({
        ...sideFilterConfig,
        categories: sideFilterConfig.categories,
      });
    } else {
      setSideFilterConfig((prev) => {
        return {
          ...prev,
          ...prev.categories.push(e.target.value),
        };
      });
    }
  };
  return (
    <div className="categories">
      <p>
        <strong>Categories</strong>
      </p>
      <div className="categories-filters">
        <form onChange={categoryChangeHandler}>
          <div className="categories-filters--wrapper">
            <input
              type="checkbox"
              id="Flip Flops"
              value="Flip Flops"
              defaultChecked={true}
            />
            <label htmlFor="Flip Flops">Flip Flops</label>
          </div>

          <div className="categories-filters--wrapper">
            <input
              type="checkbox"
              id="Sneakers"
              value="Sneakers"
              defaultChecked={true}
            />
            <label htmlFor="Sneakers">Sneakers</label>
          </div>
          <div className="categories-filters--wrapper">
            <input
              type="checkbox"
              id="Lace-Up Shoes"
              value="Lace-Up Shoes"
              defaultChecked={true}
            />
            <label htmlFor="Lace-Up Shoes">Lace-Up Shoes</label>
          </div>
          <div className="categories-filters--wrapper">
            <input
              type="checkbox"
              id="Shoe Accessories"
              value="Shoe Accessories"
              defaultChecked={true}
            />
            <label htmlFor="Shoe Accessories">Shoe Accessories</label>
          </div>
        </form>
      </div>
    </div>
  );
});

export default CategoryFilter;
