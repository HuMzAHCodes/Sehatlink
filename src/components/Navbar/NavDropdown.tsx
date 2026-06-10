import styles from "./Navbar.module.css";

interface NavDropdownProps {
  items: string[];
}

const NavDropdown = ({ items }: NavDropdownProps) => {
  return (
    <div className={styles.dropdown}>
      {items.map((item) => (
        <a key={item} href="#" className={styles.dropdownItem}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavDropdown;
