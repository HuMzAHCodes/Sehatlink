import styles from "./NewsCarousel.module.css";

interface NewsCardProps {
  outlet: string;
  excerpt: string;
  link: string;
}

const NewsCard = ({ outlet, excerpt, link }: NewsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLogo}>
        <span className={styles.outletName}>{outlet}</span>
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
      <a href={link} className={styles.readMore}>
        READ MORE
      </a>
    </div>
  );
};

export default NewsCard;
