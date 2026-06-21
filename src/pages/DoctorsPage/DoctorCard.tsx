import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import styles from "./DoctorsPage.module.css";
import doctorPlaceholder from "../../assets/images/doctor-placeholder.webp";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  qualification: string;
  hospital: string;
  rating: number;
  reviews: number;
  fee: number;
  avatar: string;
}

const DoctorCard = ({
  id,
  name,
  specialty,
  experience,
  qualification,
  hospital,
  rating,
  reviews,
  fee,
  avatar,
}: DoctorCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      {/* Left — Avatar */}
      <div className={styles.avatarWrapper}>
        <img
          src={doctorPlaceholder}
          alt={name}
          className={styles.avatar}
          onError={(e) => {
            (e.target as HTMLImageElement).src = doctorPlaceholder;
          }}
        />
      </div>

      {/* Middle — Info */}
      <div className={styles.cardInfo}>
        <div className={styles.nameRow}>
          <h3 className={styles.doctorName}>{name}</h3>
          <span className={styles.verifiedBadge}>
            <MdVerified className={styles.verifiedIcon} />
            PMDC Verified
          </span>
        </div>

        <p className={styles.specialty}>{specialty}</p>
        <p className={styles.qualification}>{qualification}</p>

        <div className={styles.statsRow}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{experience}</span>
            <span className={styles.statLabel}>Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <div className={styles.ratingRow}>
              <FaStar className={styles.starIcon} />
              <span className={styles.statValue}>{rating}</span>
            </div>
            <span className={styles.statLabel}>{reviews} Reviews</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>{hospital}</span>
            <span className={styles.statLabel}>Hospital</span>
          </div>
        </div>

        {/* Availability Box */}
        <div className={styles.availabilityBox}>
          <FiVideo className={styles.availIcon} />
          <div>
            <p className={styles.availTitle}>Online Video Consultation</p>
            <p className={styles.availStatus}>● Available tomorrow</p>
          </div>
          <span className={styles.availFee}>Rs. {fee}</span>
        </div>
      </div>

      {/* Right — Buttons */}
      <div className={styles.cardActions}>
        <button
          className={styles.videoButton}
          onClick={() => navigate(`/doctors/${specialty.toLowerCase()}/${id}`)}
        >
          <FiVideo />
          Video Consultation
        </button>
        <button
          className={styles.bookButton}
          onClick={() => navigate(`/doctors/${specialty.toLowerCase()}/${id}`)}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
