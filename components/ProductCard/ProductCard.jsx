import { useState } from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ price, imgUrl, title, address, showLocation }) => {
  const [locationVisible, setLocationVisible] = useState(false);

  const toggleLocationVisibility = () => {
    setLocationVisible(!locationVisible);
  };

  const logProductTitle = () => {
    console.log(title);
  };

  return (
    <div className={styles.main} onClick={logProductTitle}>
      <h3>{price}</h3>
      <img src={imgUrl} />
      <h4>{title}</h4>
      <button onClick={toggleLocationVisibility}>{showLocation}</button>
      {locationVisible && <p>{address}</p>}
    </div>
  );
};

export default ProductCard;
