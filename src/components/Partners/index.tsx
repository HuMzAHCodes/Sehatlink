import { PARTNERS } from "../../constants/data";
import PartnerLogo from "./PartnerLogo";
import styles from "./Partners.module.css";

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Esteemed Partners</h2>
        <p className={styles.sectionSubtext}>
          Avail Exclusive partnership benefits for your brand, clients and
          employees.
        </p>
        <button className={styles.partnerButton}>Partner with oladoc</button>
      </div>

      <div className={styles.logosGrid}>
        {PARTNERS.map((partner) => (
          <PartnerLogo key={partner.name} name={partner.name} />
        ))}
      </div>
    </section>
  );
};

export default Partners;
