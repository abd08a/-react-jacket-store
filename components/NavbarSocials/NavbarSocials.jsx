import styles from "./NavbarSocials.module.css";
import instaIcon from "../../assets/icons8-instagram.svg";
import twitterIcon from "../../assets/icons8-twitter.svg";

const NavbarSocials = () => {
  console.log(instaIcon);
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <a href="#inst">
            <img src={instaIcon.src} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#twitter">
            <img src={twitterIcon.src} alt="Twitter" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarSocials;
