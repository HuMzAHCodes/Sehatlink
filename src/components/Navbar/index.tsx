import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <NavLogo />
      <NavLinks />
      <NavActions />
    </header>
  );
};

export default Navbar;
