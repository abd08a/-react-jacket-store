import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import ProductType from "@/components/ProductType/ProductType";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ProductType />
      <Cards />
    </div>
  );
};

export default MainPage;
