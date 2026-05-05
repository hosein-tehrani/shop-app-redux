import styles from "./CheckoutPage.module.css";

import { useSelector } from "react-redux";
import CheckoutSidebar from "../components/CheckoutSidebar";
import CheckoutProductCard from "../components/CheckoutProductCard";

function CheckoutPage() {
  const cart = useSelector((store) => store.cart);
  return (
    <>
      <div className={styles.container}>
        <CheckoutSidebar cart={cart} />
        <div className={styles.main}>
          {cart.selectedProducts.length ? (
            cart.selectedProducts.map((item) => (
              <CheckoutProductCard key={item.id} product={item} />
            ))
          ) : (
            <div className={styles.empty}>
              <img src="emptyCart.png" alt="emptyCart" />
              <div>Your cart is empty!</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
