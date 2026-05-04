import { useEffect, useState } from "react";

import { fetchProducts } from "../features/product/productSlice";
// import { useProducts } from "../context/ProductsContext";
import {
  filterProducts,
  searchProducts,
  setQueryObject,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ImSearch } from "react-icons/im";
import Loader from "../components/Loader";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";
import styles from "./Products.module.css";

function Products() {
  // const products = useProducts()
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);

  useEffect(() => {
    setDisplayed(products);
    const query = {};
  }, [products]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);
  const searchHandler = () => {
    setQuery((query) => setQueryObject(query, { search }));
  };
  const categoryHandler = (category) => {
    setCategory(category);
    setQuery((query) => setQueryObject(query, { category }));
  };
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.products}>
            {displayed.map((product) => (
              <ProductCard key={product.id} productData={product} />
            ))}
          </div>
        )}
        <div className={styles.sidebar}>
          <Sidebar category={category} categoryHandler={categoryHandler} />
        </div>
      </div>
    </>
  );
}

export default Products;
