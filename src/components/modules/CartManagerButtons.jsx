import { useDispatch, useSelector } from "react-redux";
import { productQuantity } from "../../helper/helper";
import styles from "./CartManagerButtons.module.css";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../../features/cart/cartSlice";
import { MdDeleteOutline } from "react-icons/md";
import { TbShoppingBagCheck } from "react-icons/tb";

function CartManagerButtons({ details }) {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const { id } = details;
  const quantity = productQuantity(cart, +id);
  return (
    <div className={styles.actions}>
      {quantity > 1 && (
        <button onClick={() => dispatch(decrease(details))}>-</button>
      )}
      {quantity === 1 && (
        <button onClick={() => dispatch(removeItem(details))}>
          <MdDeleteOutline />
        </button>
      )}
      {!!quantity && <span>{quantity}</span>}
      {quantity > 0 && (
        <button onClick={() => dispatch(increase(details))}>+</button>
      )}
      {quantity === 0 && (
        <>
          <button onClick={() => dispatch(addItem(details))}>
            <TbShoppingBagCheck />
          </button>
          <span className={styles.buyText}>Click to Buy!</span>
        </>
      )}
    </div>
  );
}

export default CartManagerButtons;
