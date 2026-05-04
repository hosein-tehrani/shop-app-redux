import { useSelector } from "react-redux";
import styles from "./Layout.module.css";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
function Layout({ children }) {
  const state = useSelector((store) => store.cart);

  return (
    <>
      <header className={styles.header}>
        <Link to="/products">SHOP</Link>
        <Link to="/checkout" className={styles.shoppingCart}>
          <div>
            <PiShoppingCartSimpleBold />
            {!!state.itemCounter && <span>{state.itemCounter}</span>}
          </div>
        </Link>
      </header>
      <div className={styles.main}>{children}</div>
      <footer className={styles.footer}>made with love ❤️ by hossein</footer>
    </>
  );
}

export default Layout;
