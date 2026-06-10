import SpecialtyIcon from "./SpecialtyIcon";
import styles from "./Specialties.module.css";
import {
  GiKidneys,
  GiBrain,
  GiEyeball,
  GiTooth,
  GiBabyBottle,
} from "react-icons/gi";
import { FaUserMd, FaBone, FaHeartbeat, FaWeight } from "react-icons/fa";
import { MdPregnantWoman, MdHearing, MdOutlineBloodtype } from "react-icons/md";
import { RiMentalHealthLine, RiLungsLine } from "react-icons/ri";
import type { IconType } from "react-icons";

interface SpecialtyItem {
  label: string;
  Icon: IconType;
}

const SPECIALTIES_WITH_ICONS: SpecialtyItem[] = [
  { label: "Dermatologist", Icon: FaUserMd },
  { label: "Gynecologist", Icon: MdPregnantWoman },
  { label: "Urologist", Icon: GiKidneys },
  { label: "Gastroenterologist", Icon: MdOutlineBloodtype },
  { label: "Dentist", Icon: GiTooth },
  { label: "Obesity Specialist", Icon: FaWeight },
  { label: "ENT Specialist", Icon: MdHearing },
  { label: "Orthopedic Surgeon", Icon: FaBone },
  { label: "Sexologist", Icon: RiMentalHealthLine },
  { label: "Neurologist", Icon: GiBrain },
  { label: "Child Specialist", Icon: GiBabyBottle },
  { label: "Pulmonologist", Icon: RiLungsLine },
  { label: "Eye Specialist", Icon: GiEyeball },
  { label: "General Physician", Icon: FaHeartbeat },
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
        {SPECIALTIES_WITH_ICONS.map((item) => (
          <SpecialtyIcon key={item.label} label={item.label} Icon={item.Icon} />
        ))}
      </div>
    </section>
  );
};

export default Specialties;
