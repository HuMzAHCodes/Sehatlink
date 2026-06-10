import styles from "./Hero.module.css";

const HeroImage = () => {
  return (
    <div className={styles.heroImageWrapper}>
      <img
        src="https://placehold.co/480x420/e8d5f5/1B2D6B?text=Doctor"
        alt="Doctor"
        className={styles.heroImage}
      />
    </div>
  );
};

export default HeroImage;
