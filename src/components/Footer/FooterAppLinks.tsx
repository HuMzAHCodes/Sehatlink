import { FaApple, FaGooglePlay } from "react-icons/fa";
import styles from "./Footer.module.css";

const FooterAppLinks = () => {
  return (
    <div className={styles.appLinksWrapper}>
      <p className={styles.appLinksTitle}>Get the oladoc App</p>
      <a href="#" className={styles.appButton}>
        <FaApple className={styles.appIcon} />
        <div className={styles.appButtonText}>
          <span className={styles.appButtonSmall}>Download on the</span>
          <span className={styles.appButtonBig}>App Store</span>
        </div>
      </a>
      <a href="#" className={styles.appButton}>
        <FaGooglePlay className={styles.appIcon} />
        <div className={styles.appButtonText}>
          <span className={styles.appButtonSmall}>GET IT ON</span>
          <span className={styles.appButtonBig}>Google Play</span>
        </div>
      </a>
    </div>
  );
};

export default FooterAppLinks;
