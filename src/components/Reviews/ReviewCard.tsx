import { FaStar } from "react-icons/fa";
import styles from "./Reviews.module.css";

interface ReviewCardProps {
  stars: number;
  quote: string;
  avatar: string;
  name: string;
}

const ReviewCard = ({ stars, quote, avatar, name }: ReviewCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.starsRow}>
        {Array.from({ length: stars }).map((_, i) => (
          <FaStar key={i} className={styles.star} />
        ))}
      </div>
      <p className={styles.quote}>"{quote}"</p>
      <div className={styles.reviewer}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <span className={styles.reviewerName}>{name}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
