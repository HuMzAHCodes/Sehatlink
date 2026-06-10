import { FaCircle } from "react-icons/fa";
import styles from "./FeatureCards.module.css";

interface FeatureCardProps {
  image: string;
  badge?: string | null;
  title: string;
  description: string;
}

const FeatureCard = ({
  image,
  badge,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.cardImage} />
        {badge && (
          <div className={styles.cardBadge}>
            <FaCircle className={styles.badgeDot} />
            <span>{badge}</span>
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
