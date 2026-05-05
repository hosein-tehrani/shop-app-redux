import { useDispatch } from "react-redux";
import { checkout } from "../features/cart/cartSlice";
import styles from "./CheckoutSidebar.module.css";
import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
function CheckoutSidebar({ cart }) {
  const { itemCounter, total, checkout: checkoutStatus } = cart;
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <span>
          <TbChecklist />
          <p>Total: </p>
        </span>
        {total} $
      </div>
      <div>
        <span>
          <FaHashtag />
          <p>Quantity: </p>
        </span>
        {itemCounter}
      </div>
      <div>
        <span>
          <BsPatchCheck />
          <p>status: </p>
        </span>
        {checkoutStatus ? " done" : " is pending..."}
      </div>
      <button disabled={itemCounter == 0} onClick={() => dispatch(checkout())}>
        Checkout
      </button>
    </div>
  );
}

export default CheckoutSidebar;
