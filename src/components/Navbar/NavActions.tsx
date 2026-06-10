import { FiPhone } from "react-icons/fi";
import styles from "./Navbar.module.css";

const NavActions = () => {
  return (
    <div className={styles.navActions}>
      <button className={styles.phoneButton}>
        <FiPhone className={styles.phoneIcon} />
        0518151800
      </button>
      <button className={styles.joinButton}>Join as Doctor</button>
      <button className={styles.loginButton}>Login/SignUp</button>
    </div>
  );
};

export default NavActions;
