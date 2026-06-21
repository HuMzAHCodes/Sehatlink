import styles from "./Footer.module.css";

const FooterBrand = () => {
  return (
    <div className={styles.brandColumn}>
      <a href="#" className={styles.footerLogo}>
        Sehat<span className={styles.footerLogoAccent}>link</span>
      </a>
      <p className={styles.brandDescription}>
        Book appointments with the best Doctors and Specialists such as
        Gynecologists, Skin Specialists, Child Specialists, Surgeons, etc. Avail
        test services such as MRI, CT scan, Ultrasound, X-Ray, and Online Doctor
        Video Consultations all across Pakistan conveniently.
      </p>
    </div>
  );
};

export default FooterBrand;
