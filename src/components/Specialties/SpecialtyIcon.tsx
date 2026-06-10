import styles from "./Specialties.module.css";

interface SpecialtyIconProps {
  label: string;
  emoji: string;
}

const SpecialtyIcon = ({ label, emoji }: SpecialtyIconProps) => {
  return (
    <div className={styles.iconItem}>
      <div className={styles.iconCircle}>
        <span className={styles.emoji}>{emoji}</span>
      </div>
      <p className={styles.iconLabel}>{label}</p>
    </div>
  );
};

export default SpecialtyIcon;
