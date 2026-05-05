import { Link } from "react-router-dom";
import { shortenText } from "../helper/helper";
import styles from "./ProductCard.module.css";

import CartManagerButtons from "./modules/CartManagerButtons";

function ProductCard({ productData }) {
  const { title, image, price, id } = productData;
  const editedPhoto = image.split("/")[4];

  return (
    <div className={styles.card}>
      <Link to={"/product/" + id} className={styles.top}>
        <img src={`productPhotos/${editedPhoto}`} alt={title} />
        <h3>{shortenText(title)}</h3>
      </Link>
      <div className={styles.actions}>
        <div className={styles.price}>${price.toLocaleString()}</div>
        <CartManagerButtons details={productData} />
      </div>
    </div>
  );
}

export default ProductCard;
