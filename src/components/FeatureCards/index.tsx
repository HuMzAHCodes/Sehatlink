import { FEATURE_CARDS } from "../../constants/data";
import FeatureCard from "./FeatureCard";
import styles from "./FeatureCards.module.css";

const FeatureCards = () => {
  return (
    <section className={styles.featureCardsSection}>
      {FEATURE_CARDS.map((card) => (
        <FeatureCard
          key={card.title}
          image={card.image}
          badge={card.badge}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default FeatureCards;
