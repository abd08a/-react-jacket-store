import { useState } from "react";
import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import NavbarSocials from "../NavbarSocials/NavbarSocials";
import NavbarCart from "../NavbarCart/NavbarCart";
import burgerBtn from "../../assets/burger.svg";

const Header = () => {
  const [logo, setLogo] = useState("Jacket Store");
  const [isDisplayMobileMenu, setDisplayMobileMenu] = useState(false);

  const displayLog = () => {
    console.log("button clicked");
  };

  const onBurgerBtnClick = () => {
    setDisplayMobileMenu(!isDisplayMobileMenu);
  };

  return (
    <header className={styles.main}>
      <button onClick={onBurgerBtnClick} className={styles.burgerBtn}>
        <img src={burgerBtn.src}></img>
      </button>
      <Navbar></Navbar>
      <div className={styles.logo}>{logo}</div>
      <NavbarSocials></NavbarSocials>
      <NavbarCart></NavbarCart>

      {isDisplayMobileMenu && (
        <div className={styles.mobileMenu}>
          <Navbar></Navbar>
          <NavbarSocials></NavbarSocials>
        </div>
      )}
    </header>
  );
};

export default Header;
