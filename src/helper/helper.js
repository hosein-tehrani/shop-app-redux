const sumProducts = (products) => {
  const itemCounter = products.reduce((total, cur) => total + cur.quantity, 0);
  const total = products
    .reduce((total, cur) => total + cur.price * cur.quantity, 0)
    .toFixed(2);

  return {
    itemCounter,
    total,
  };
};
const shortenText = (text) => {
  const short = text.split(" ").slice(0, 3).join("");
  return short;
};

const searchProducts = (products, search) => {
  if (!search) return products;
  return products.filter((p) => p.title.toLowerCase().includes(search));
};

const filterProducts = (products, cat) => {
  if (!cat) return products;
  return products.filter((p) => p.category === cat);
};

const setQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...newQuery,
  };
};
const productQuantity = (state, id) => {
  const productIndex = state.selectedProducts.findIndex((p) => p.id === id);
  if (productIndex === -1) return 0;
  return state.selectedProducts[productIndex].quantity;
};

export {
  sumProducts,
  shortenText,
  searchProducts,
  filterProducts,
  setQueryObject,
  productQuantity,
};
