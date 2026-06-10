import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { REVIEWS } from "../../constants/data";
import ReviewCard from "./ReviewCard";
import styles from "./Reviews.module.css";

const VISIBLE_COUNT = 3;

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex + VISIBLE_COUNT < REVIEWS.length;

  const handleNext = () => {
    if (canGoForward) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (canGoBack) setCurrentIndex((prev) => prev - 1);
  };

  const visibleCards = REVIEWS.slice(
    currentIndex,
    currentIndex + VISIBLE_COUNT,
  );

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          Our Customers <span className={styles.titleAccent}>love us</span>
        </h2>
        <p className={styles.sectionSubtext}>
          Check out the reviews from our satisfied customers
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.cardsRow}>
          {visibleCards.map((review) => (
            <ReviewCard
              key={review.name}
              stars={review.stars}
              quote={review.quote}
              avatar={review.avatar}
              name={review.name}
            />
          ))}
        </div>

        <div className={styles.arrowButtons}>
          <button
            className={`${styles.arrowButton} ${!canGoBack ? styles.arrowDisabled : ""}`}
            onClick={handlePrev}
          >
            <FiChevronLeft />
          </button>
          <button
            className={`${styles.arrowButton} ${!canGoForward ? styles.arrowDisabled : ""}`}
            onClick={handleNext}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
