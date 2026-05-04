import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helper/helper";
import styles from "./ProductCard.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  decrease,
  increase,
  removeItem,
} from "../features/cart/cartSlice";

function ProductCard({ productData }) {
  const { title, image, category, price, id } = productData;
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const quantity = productQuantity(state, id);
  const editedPhoto = image.split("/")[4];

  return (
    <div className={styles.card}>
      <Link to={"/product/" + id} className={styles.top}>
        <img src={`productPhotos/${editedPhoto}`} alt={title} />
        <h3>{shortenText(title)}</h3>
      </Link>
      <div className={styles.actions}>
        <div className={styles.price}>${price.toLocaleString()}</div>
        <div>
          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(productData))}>-</button>
          )}
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(productData))}>
              <MdDeleteOutline />
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity > 0 && (
            <button onClick={() => dispatch(increase(productData))}>+</button>
          )}
          {quantity === 0 && (
            <button onClick={() => dispatch(addItem(productData))}>
              <TbShoppingBagCheck />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
