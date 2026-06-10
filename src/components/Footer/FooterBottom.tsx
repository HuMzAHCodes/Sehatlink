import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const FooterBottom = () => {
  return (
    <div className={styles.footerBottom}>
      <div className={styles.trustBadges}>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>✓</span>
          <div>
            <p className={styles.trustTitle}>PMDC Verified Doctors</p>
            <p className={styles.trustSubtext}>
              Authentic & updated information
            </p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>🎧</span>
          <div>
            <p className={styles.trustTitle}>Reliable Customer Support</p>
            <p className={styles.trustSubtext}>7 days a week</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <span className={styles.trustIcon}>🔒</span>
          <div>
            <p className={styles.trustTitle}>Secure Online Payment</p>
            <p className={styles.trustSubtext}>
              Secure checkout using SSL Certificate
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          Copyright © 2015 - 2026 MediConnect Services Pvt Limited — All Rights
          Reserved. Reproduction of material from any oladoc pages without
          permission is strictly prohibited.
        </p>
        <div className={styles.socialIcons}>
          <span className={styles.connectText}>Connect with us</span>
          <a href="#" className={styles.socialIcon}>
            <FaTwitter />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaFacebookF />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaYoutube />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaLinkedinIn />
          </a>
          <a href="#" className={styles.socialIcon}>
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
