import styles from "./NavbarCart.module.css";
import cartIcon from "../../assets/cart.svg";

const NavbarCart = () => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <a href="#inst">
            <img src={cartIcon.src} alt="Cart" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarCart;
