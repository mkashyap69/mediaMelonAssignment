import { products } from '../utils/data';
import { sortBy } from '../utils/sortBy';
import { defaultConfig } from '../utils/constants';

export const getFilteredData = (sideFilterConfig) => {
  // if (sideFilterConfig === defaultConfig) {
  //   return products;
  // }
  return sortBy(
    products.reduce((acc, item) => {
      if (
        sideFilterConfig.categories.includes(...item.categories) &&
        sideFilterConfig.priceRange[1] > Number(item.price)
      ) {
        if (
          sideFilterConfig.size.length === 0 ||
          (sideFilterConfig.size.length > 0 &&
            sideFilterConfig.size.includes(item.size))
        ) {
          if (
            sideFilterConfig?.search.toLowerCase() ===
            item.company.toLowerCase()
          ) {
            acc.push(item);
          }
          if (!sideFilterConfig.search) {
            acc.push(item);
          }
        }
      }
      return acc;
    }, []),
    sideFilterConfig.sort[0],
    sideFilterConfig.sort[1]
  );
};
