import ConditionIcon from "./ConditionIcon";
import styles from "./Conditions.module.css";
import { GiThermometerHot, GiHeartOrgan, GiStomach } from "react-icons/gi";
import { FaHeartbeat, FaBandAid, FaBaby } from "react-icons/fa";
import { MdPregnantWoman, MdBloodtype } from "react-icons/md";
import type { IconType } from "react-icons";

interface ConditionItem {
  label: string;
  Icon: IconType;
}

const CONDITIONS_WITH_ICONS: ConditionItem[] = [
  { label: "Fever", Icon: GiThermometerHot },
  { label: "Heart Attack", Icon: GiHeartOrgan },
  { label: "Pregnancy", Icon: MdPregnantWoman },
  { label: "High Blood Pressure", Icon: MdBloodtype },
  { label: "Piles", Icon: FaBandAid },
  { label: "Diarrhea", Icon: GiStomach },
  { label: "Acne", Icon: FaBaby },
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
        {CONDITIONS_WITH_ICONS.map((item) => (
          <ConditionIcon key={item.label} label={item.label} Icon={item.Icon} />
        ))}
      </div>
    </section>
  );
};

export default Conditions;
