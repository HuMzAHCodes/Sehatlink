import styles from "./Hero.module.css";
import heroDoctor from "../../assets/images/hero-doctor.webp";

const HeroImage = () => {
  return (
    <div className={styles.heroImageWrapper}>
      <img src={heroDoctor} alt="Doctor" className={styles.heroImage} />
    </div>
  );
};

export default HeroImage;
