import styles from "./Partners.module.css";

interface PartnerLogoProps {
  name: string;
  logo: string;
}

const PartnerLogo = ({ name, logo }: PartnerLogoProps) => {
  console.log("logo path:", name, logo);
  return (
    <div className={styles.logoCell}>
      <img
        src={logo}
        alt={name}
        className={styles.logoImage}
        onError={(e) => console.log("image failed to load:", name, e)}
      />
    </div>
  );
};

export default PartnerLogo;
