import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FiClock, FiMapPin } from "react-icons/fi";
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

  const handleClick = () => {
    navigate(`/doctors/${specialty.toLowerCase()}/${id}`);
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.cardImageWrapper}>
        <img
          src={avatar}
          alt={name}
          className={styles.cardImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = doctorPlaceholder;
          }}
        />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.doctorName}>{name}</h3>
        <p className={styles.qualification}>{qualification}</p>

        <div className={styles.infoRow}>
          <FiClock className={styles.infoIcon} />
          <span>{experience} experience</span>
        </div>

        <div className={styles.infoRow}>
          <FiMapPin className={styles.infoIcon} />
          <span>{hospital}</span>
        </div>

        <div className={styles.cardFooter}>
          <div className={styles.ratingRow}>
            <FaStar className={styles.starIcon} />
            <span className={styles.ratingValue}>{rating}</span>
            <span className={styles.reviewCount}>({reviews} reviews)</span>
          </div>
          <div className={styles.fee}>Rs. {fee}</div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
