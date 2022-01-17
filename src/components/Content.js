import React, { useState, useEffect, memo, useMemo } from 'react';
import ContentHeader from './ContentHeader';
import Product from './Product';
import './css/Content.css';
import { getFilteredData } from '../utils/getFilteredData';
import { debounce } from '../utils/debounce';
import Loader from './Loader';

const Content = memo(({ sideFilterConfig, setSideFilterConfig }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const debounced = debounce((sideFilterConfig) => {
      setData(getFilteredData(sideFilterConfig));
      setLoading(false);
    });
    debounced(sideFilterConfig);
  }, [sideFilterConfig]);

  return (
    <div className="content">
      <ContentHeader setSideFilterConfig={setSideFilterConfig} />
      <div className="products">
        {loading ? (
          <div className="loading">
            <Loader />
          </div>
        ) : data.length > 0 ? (
          data.map((item) => <Product item={item} key={item.id} />)
        ) : (
          <div className="not-found">
            <h1>No Shoes Found</h1>
          </div>
        )}
      </div>
    </div>
  );
});

export default Content;
