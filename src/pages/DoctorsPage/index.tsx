import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { DOCTORS } from "../../constants/data";
import DoctorCard from "./DoctorCard";
import styles from "./DoctorsPage.module.css";

const DoctorsPage = () => {
  const { specialty } = useParams();
  const navigate = useNavigate();

  const filteredDoctors = DOCTORS.filter(
    (doc) => doc.specialty.toLowerCase() === specialty?.toLowerCase(),
  ).slice(0, 4);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          <FiArrowLeft />
          Back
        </button>
        <div>
          <h1 className={styles.pageTitle}>{specialty}</h1>
          <p className={styles.pageSubtext}>
            Showing top {filteredDoctors.length} doctors
          </p>
        </div>
      </div>

      {filteredDoctors.length === 0 ? (
        <div className={styles.noResults}>
          <p>No doctors found for this specialty.</p>
        </div>
      ) : (
        <div className={styles.cardsGrid}>
          {filteredDoctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience}
              qualification={doctor.qualification}
              hospital={doctor.hospital}
              rating={doctor.rating}
              reviews={doctor.reviews}
              fee={doctor.fee}
              avatar={doctor.avatar}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorsPage;
