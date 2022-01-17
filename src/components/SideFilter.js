import React, { memo } from 'react';
import CategoryFilter from './CategoryFilter';
import RangeFilter from './RangeFilter';
import SizeFilter from './SizeFilter';

const SideFilter = memo(({ setSideFilterConfig, sideFilterConfig }) => {
  return (
    <div className="filters">
      <CategoryFilter
        setSideFilterConfig={setSideFilterConfig}
        sideFilterConfig={sideFilterConfig}
      />

      <RangeFilter setSideFilterConfig={setSideFilterConfig} />

      <SizeFilter
        setSideFilterConfig={setSideFilterConfig}
        sideFilterConfig={sideFilterConfig}
      />
    </div>
  );
});

export default SideFilter;
