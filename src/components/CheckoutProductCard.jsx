import { shortenText } from "../helper/helper";
import styles from "./CheckoutProductCard.module.css";
import CartManagerButtons from "./modules/CartManagerButtons";

function CheckoutProductCard({ product }) {
  const { title, image } = product;
  const editedImage = image.split("/")[4];
  return (
    <div className={styles.product}>
      <img src={`productPhotos/${editedImage}`} alt={title} />
      <div>{shortenText(title)}</div>
      <CartManagerButtons details={product} />
    </div>
  );
}

export default CheckoutProductCard;
