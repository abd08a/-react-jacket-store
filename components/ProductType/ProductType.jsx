import styles from "./ProductType.module.css";

const ProductType = () => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <a href="#spring">Spring</a>
        </li>
        <li>
          <a href="#summer">Summer</a>
        </li>
        <li>
          <a href="#autumn">Autumn</a>
        </li>
        <li>
          <a href="#winter">Winter</a>
        </li>
      </ul>
    </nav>
  );
};

export default ProductType;
