import HeroBadge from "./HeroBadge";
import HeroSearchBar from "./HeroSearchBar";
import HeroImage from "./HeroImage";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          Find and Book the <br />
          <span className={styles.heroAccent}>Best Doctors</span> near you
        </h1>
        <HeroBadge />
        <HeroSearchBar />
      </div>
      <HeroImage />
    </section>
  );
};

export default Hero;
