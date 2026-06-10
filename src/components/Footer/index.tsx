import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterAppLinks from "./FooterAppLinks";
import FooterBottom from "./FooterBottom";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_CITIES,
  FOOTER_HOSPITALS,
  FOOTER_LAB_TESTS,
} from "../../constants/data";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <FooterBrand />
        <FooterLinks title="Company" links={FOOTER_COMPANY_LINKS} />
        <FooterLinks title="Major Cities" links={FOOTER_CITIES} />
        <FooterLinks title="Top Hospitals" links={FOOTER_HOSPITALS} />
        <div className={styles.rightColumn}>
          <FooterLinks title="Lab Test" links={FOOTER_LAB_TESTS} />
          <FooterAppLinks />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
