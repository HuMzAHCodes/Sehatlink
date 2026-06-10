import styles from "./Conditions.module.css";

interface ConditionIconProps {
  label: string;
  emoji: string;
}

const ConditionIcon = ({ label, emoji }: ConditionIconProps) => {
  return (
    <div className={styles.iconItem}>
      <div className={styles.iconCircle}>
        <span className={styles.emoji}>{emoji}</span>
      </div>
      <p className={styles.iconLabel}>{label}</p>
    </div>
  );
};

export default ConditionIcon;
