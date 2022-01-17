import React, { memo } from 'react';

const Product = memo(({ item }) => {
  return (
    <div className="product">
      <div className="product-name">
        <p>{item.name}</p>
        <p>
          <strong>{item.company}</strong>
        </p>
      </div>
      <div className="product-image">
        <img alt={item.company} src={item.image} />
      </div>
      <div className="product-price">
        <p>Price</p>
        <p>
          <strong>${item.price}</strong>
        </p>
      </div>
    </div>
  );
});

export default Product;
