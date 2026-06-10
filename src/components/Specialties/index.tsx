import SpecialtyIcon from "./SpecialtyIcon";
import styles from "./Specialties.module.css";

const SPECIALTIES_WITH_EMOJI = [
  { label: "Dermatologist", emoji: "🩺" },
  { label: "Gynecologist", emoji: "🤰" },
  { label: "Urologist", emoji: "🫀" },
  { label: "Gastroenterologist", emoji: "🫁" },
  { label: "Dentist", emoji: "🦷" },
  { label: "Obesity Specialist", emoji: "⚖️" },
  { label: "ENT Specialist", emoji: "👂" },
  { label: "Orthopedic Surgeon", emoji: "🦴" },
  { label: "Sexologist", emoji: "🧬" },
  { label: "Neurologist", emoji: "🧠" },
  { label: "Child Specialist", emoji: "👶" },
  { label: "Pulmonologist", emoji: "🫁" },
  { label: "Eye Specialist", emoji: "👁️" },
  { label: "General Physician", emoji: "👨‍⚕️" },
];

const Specialties = () => {
  return (
    <section className={styles.specialtiesSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Consult best doctors online</h2>
        <a href="#" className={styles.viewAll}>
          View All
        </a>
      </div>
      <div className={styles.iconsGrid}>
        {SPECIALTIES_WITH_EMOJI.map((item) => (
          <SpecialtyIcon
            key={item.label}
            label={item.label}
            emoji={item.emoji}
          />
        ))}
      </div>
    </section>
  );
};

export default Specialties;
