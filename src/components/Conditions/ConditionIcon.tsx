import type { IconType } from "react-icons";

import styles from "./Conditions.module.css";

interface ConditionIconProps {
  label: string;
  Icon: IconType;
}

const ConditionIcon = ({ label, Icon }: ConditionIconProps) => {
  return (
    <div className={styles.iconItem}>
      <div className={styles.iconCircle}>
        <Icon className={styles.icon} />
      </div>
      <p className={styles.iconLabel}>{label}</p>
    </div>
  );
};

export default ConditionIcon;
