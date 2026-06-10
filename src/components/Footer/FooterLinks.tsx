import styles from "./Footer.module.css";

interface FooterLinksProps {
  title: string;
  links: string[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className={styles.linksColumn}>
      <h4 className={styles.columnTitle}>{title}</h4>
      <ul className={styles.linksList}>
        {links.map((link) => (
          <li key={link}>
            <a href="#" className={styles.footerLink}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
