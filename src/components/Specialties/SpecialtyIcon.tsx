import { useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";
import styles from "./Specialties.module.css";

interface SpecialtyIconProps {
  label: string;
  Icon: IconType;
}

const SpecialtyIcon = ({ label, Icon }: SpecialtyIconProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/doctors/${label.toLowerCase()}`);
  };

  return (
    <div className={styles.iconItem} onClick={handleClick}>
      <div className={styles.iconCircle}>
        <Icon className={styles.icon} />
      </div>
      <p className={styles.iconLabel}>{label}</p>
    </div>
  );
};

export default SpecialtyIcon;
