import { Link, useParams } from "react-router-dom";

import Loader from "../components/modules/Loader";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

// redux
import { useDispatch, useSelector } from "react-redux";

// style and icons
import styles from "./DetailsPage.module.css";
import { SlShare } from "react-icons/sl";
import { fetchProducts } from "../features/product/productSlice";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import CartManagerButtons from "../components/modules/CartManagerButtons";
function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  // -----useEffect----------
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const details = useSelector((store) =>
    store.product.products.find((i) => i.id === +id),
  );

  const loading = useSelector((store) => store.product.loading);

  if (loading || !details || !details.title) return <Loader />;
  const { title, price, description, image, category } = details;
  const editedPhoto = image.split("/")[4];
  const copyLink = async () => {
    const pageLink = window.location.href;
    await navigator.clipboard.writeText(pageLink);
    toast.success("لینک کپی شد!");
  };
  return (
    <div className={styles.container}>
      <Helmet>
        <title>shop | {title}</title>
      </Helmet>
      <div className={styles.imageBox}>
        <img
          src={`/productPhotos/${editedPhoto}`}
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <div className={styles.buttons}>
            <SlShare size={25} color="gray" onClick={() => copyLink()} />
          </div>
        </div>
        <hr />
        <div className={styles.userBox}></div>
        <h3>description</h3>
        <div className={styles.content}>{description}</div>
        <div className={styles.category}>
          <SiOpenproject /> {category}
        </div>
        <span className={styles.price}>
          <IoMdPricetag /> {price.toLocaleString()} $
        </span>
        <div className={styles.bottom}>
          <CartManagerButtons details={details} />
          <Link to="/products">
            <button>Back to shop</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
