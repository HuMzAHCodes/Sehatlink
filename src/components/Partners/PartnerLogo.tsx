import styles from "./Partners.module.css";

interface PartnerLogoProps {
  name: string;
}

const PartnerLogo = ({ name }: PartnerLogoProps) => {
  return (
    <div className={styles.logoCell}>
      <span className={styles.logoName}>{name}</span>
    </div>
  );
};

export default PartnerLogo;
