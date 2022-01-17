export const sortBy = (data, key, pattern) => {
  return data.sort((a, b) => {
    if (key === 'createdAt') {
      if (pattern === 'asc') {
        return Date.parse(a[key]) - Date.parse(b[key]);
      } else {
        return Date.parse(b[key]) - Date.parse(a[key]);
      }
    } else {
      if (pattern === 'asc') {
        return a[key] - b[key];
      } else {
        return b[key] - a[key];
      }
    }
  });
};
