import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#lookbook">Lookbook</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
