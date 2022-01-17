import React, { memo } from 'react';
import './css/Header.css';

const Header = memo(({ setSideFilterConfig }) => {
  const searchChangeHandler = (e) => {
    setSideFilterConfig((prev) => {
      return {
        ...prev,
        search: e.target.value,
      };
    });
  };
  return (
    <header>
      <div className="logo">
        <p>
          <strong>Shoe.</strong>
        </p>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search by company"
          onChange={searchChangeHandler}
        />
      </div>
    </header>
  );
});

export default Header;
