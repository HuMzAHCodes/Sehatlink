import styles from "./Navbar.module.css";

const NavLogo = () => {
  return (
    <a href="#" className={styles.logo}>
      Sehat<span className={styles.logoAccent}>link</span>
    </a>
  );
};

export default NavLogo;
