import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { NAV_LINKS } from "../../constants/data";
import NavDropdown from "./NavDropdown";
import styles from "./Navbar.module.css";

const DROPDOWN_ITEMS: Record<string, string[]> = {
  Doctors: [
    "General Physician",
    "Dermatologist",
    "Neurologist",
    "Cardiologist",
  ],
  Hospitals: ["Doctors Hospital", "Shifa International", "Aga Khan Hospital"],
  "Labs and Diagnostics": ["MRI", "X-RAY", "CT Scan", "Ultrasound"],
};

const NavLinks = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className={styles.navLinks}>
      {NAV_LINKS.map((link) => (
        <div
          key={link.label}
          className={styles.navItem}
          onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.label)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <a href={link.href} className={styles.navLink}>
            {link.label}
            {link.hasDropdown && <FiChevronDown className={styles.chevron} />}
          </a>
          {link.hasDropdown && activeDropdown === link.label && (
            <NavDropdown items={DROPDOWN_ITEMS[link.label] ?? []} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavLinks;
