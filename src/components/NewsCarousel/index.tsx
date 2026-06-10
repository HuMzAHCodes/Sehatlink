import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { NEWS_ITEMS } from "../../constants/data";
import NewsCard from "./NewsCard";
import styles from "./NewsCarousel.module.css";

const VISIBLE_COUNT = 3;

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex + VISIBLE_COUNT < NEWS_ITEMS.length;

  const handleNext = () => {
    if (canGoForward) setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (canGoBack) setCurrentIndex((prev) => prev - 1);
  };

  const visibleCards = NEWS_ITEMS.slice(
    currentIndex,
    currentIndex + VISIBLE_COUNT,
  );

  return (
    <section className={styles.newsSection}>
      <h2 className={styles.sectionTitle}>As seen in news</h2>

      <div className={styles.carouselWrapper}>
        <div className={styles.cardsRow}>
          {visibleCards.map((item) => (
            <NewsCard
              key={item.outlet}
              outlet={item.outlet}
              excerpt={item.excerpt}
              link={item.link}
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

export default NewsCarousel;
