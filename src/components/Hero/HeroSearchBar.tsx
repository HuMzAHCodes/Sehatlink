import { MdMyLocation } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import styles from "./Hero.module.css";

const HeroSearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <div className={styles.locationField}>
        <input
          type="text"
          placeholder="Faisalabad"
          className={styles.locationInput}
        />
        <button className={styles.detectButton}>
          <MdMyLocation className={styles.detectIcon} />
          Detect
        </button>
      </div>

      <div className={styles.divider} />

      <div className={styles.searchField}>
        <FiSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Doctors, Hospital, Conditions"
          className={styles.searchInput}
        />
      </div>

      <button className={styles.searchButton}>Search</button>
    </div>
  );
};

export default HeroSearchBar;
