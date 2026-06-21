import { FaStar } from "react-icons/fa";
import { FiClock, FiMapPin, FiAward } from "react-icons/fi";
import styles from "./DoctorDetailPage.module.css";
import doctorPlaceholder from "../../assets/images/doctor-placeholder.webp";

interface DoctorInfoProps {
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  hospital: string;
  rating: number;
  reviews: number;
  fee: number;
  avatar: string;
  about: string;
}

const DoctorInfo = ({
  name,
  specialty,
  experience,
  qualification,
  hospital,
  rating,
  reviews,
  fee,

  about,
}: DoctorInfoProps) => {
  return (
    <div className={styles.infoSection}>
      <div className={styles.topRow}>
        <div className={styles.avatarWrapper}>
          <img src={doctorPlaceholder} alt={name} className={styles.avatar} />
        </div>

        <div className={styles.doctorMeta}>
          <h1 className={styles.doctorName}>{name}</h1>
          <p className={styles.specialty}>{specialty}</p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <FiAward className={styles.metaIcon} />
              <span>{qualification}</span>
            </div>
            <div className={styles.metaItem}>
              <FiClock className={styles.metaIcon} />
              <span>{experience} experience</span>
            </div>
            <div className={styles.metaItem}>
              <FiMapPin className={styles.metaIcon} />
              <span>{hospital}</span>
            </div>
          </div>

          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <div className={styles.ratingRow}>
                <FaStar className={styles.starIcon} />
                <span className={styles.ratingValue}>{rating}</span>
              </div>
              <p className={styles.statLabel}>{reviews} reviews</p>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statBox}>
              <p className={styles.feeValue}>Rs. {fee}</p>
              <p className={styles.statLabel}>Consultation fee</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <h3 className={styles.aboutTitle}>About Doctor</h3>
        <p className={styles.aboutText}>{about}</p>
      </div>
    </div>
  );
};

export default DoctorInfo;
