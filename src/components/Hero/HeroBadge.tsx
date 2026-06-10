import { FiCheckCircle } from "react-icons/fi";
import styles from "./Hero.module.css";

const HeroBadge = () => {
  return (
    <div className={styles.badge}>
      <FiCheckCircle className={styles.badgeIcon} />
      <span>50M+ patients served</span>
    </div>
  );
};

export default HeroBadge;
