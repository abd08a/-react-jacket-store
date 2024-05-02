import { useState } from "react";
import styles from "./CardsWrapper.module.css";
import ProductCard from "../ProductCard/ProductCard";

const CardsWrapper = () => {
  const [products, setProducts] = useState([
    {
      price: "40$",
      imgUrl: "https://m.media-amazon.com/images/I/71g+ctE-efL._AC_UY1000_.jpg",
      title: "Bomber Jacket",
      showLocation: "Show Location",
      address: "Marijampoles 58, Kaunas",
    },
    {
      price: "50$",
      imgUrl:
        "https://farmhand.ie/wp-content/uploads/2021/07/Amazone-SS-Jacket-scaled.jpg",
      title: "Regular Jacket",
      showLocation: "Show Location",
      address: "Druskininku 22, Alytus",
    },
    {
      price: "35$",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38tC9L3iogKbHji9_lkR_DZjR3IHfagpBVTrUfhxeig&s",
      title: "Warm Spring Jacket",
      showLocation: "Show Location",
      address: "Pieniu 18, Kedainiai",
    },
    {
      price: "75$",
      imgUrl:
        " https://m.media-amazon.com/images/S/shoppable-media-external-prod-iad-us-east-1/7fb16b09-8679-4fed-9e98-db2b4f0908c7/c36fe-342d-4260-a93d-ff64040cb._SX828_Q60_.jpeg",
      title: "Varsity Jacket",
      showLocation: "Show Location",
      address: "Bebru 55, Plunge",
    },
  ]);

  return (
    <div className={styles.main}>
      {/* Render each product as a Card component */}
      {products.map((product) => (
        <ProductCard
          price={product.price}
          imgUrl={product.imgUrl}
          title={product.title}
          showLocation={product.showLocation}
          address={product.address}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
