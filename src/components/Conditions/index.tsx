import ConditionIcon from "./ConditionIcon";
import styles from "./Conditions.module.css";

const CONDITIONS_WITH_EMOJI = [
  { label: "Fever", emoji: "🤒" },
  { label: "Heart Attack", emoji: "❤️" },
  { label: "Pregnancy", emoji: "🤰" },
  { label: "High Blood Pressure", emoji: "🩺" },
  { label: "Piles", emoji: "🩹" },
  { label: "Diarrhea", emoji: "🤢" },
  { label: "Acne", emoji: "😣" },
];

const Conditions = () => {
  return (
    <section className={styles.conditionsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Search doctor by condition</h2>
        <a href="#" className={styles.viewAll}>
          View All
        </a>
      </div>
      <div className={styles.iconsRow}>
        {CONDITIONS_WITH_EMOJI.map((item) => (
          <ConditionIcon
            key={item.label}
            label={item.label}
            emoji={item.emoji}
          />
        ))}
      </div>
    </section>
  );
};

export default Conditions;
