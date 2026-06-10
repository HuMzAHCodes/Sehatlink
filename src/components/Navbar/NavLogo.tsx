import styles from "./Navbar.module.css";

const NavLogo = () => {
  return (
    <a href="#" className={styles.logo}>
      ola<span className={styles.logoAccent}>doc</span>
    </a>
  );
};

export default NavLogo;
