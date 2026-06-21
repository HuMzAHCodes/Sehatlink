import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { DOCTORS } from "../../constants/data";
import DoctorCard from "./DoctorCard";
import styles from "./DoctorsPage.module.css";

const FILTERS = [
  "All",
  "Female Doctors",
  "Most Experienced",
  "Lowest Fee",
  "Highest Rated",
  "Available Today",
  "Video Consultation",
];

const DoctorsPage = () => {
  const { specialty } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredDoctors = DOCTORS.filter(
    (doc) => doc.specialty.toLowerCase() === specialty?.toLowerCase(),
  ).slice(0, 4);

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <span onClick={() => navigate("/")} className={styles.breadcrumbLink}>
          Home
        </span>
        <span className={styles.breadcrumbSep}>›</span>
        <span onClick={() => navigate("/")} className={styles.breadcrumbLink}>
          Pakistan
        </span>
        <span className={styles.breadcrumbSep}>›</span>
        <span className={styles.breadcrumbCurrent}>{specialty}</span>
      </div>

      {/* Page Title */}
      <div className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate("/")}>
          <FiArrowLeft />
          Back
        </button>
        <div>
          <h1 className={styles.pageTitle}>
            Top {filteredDoctors.length} {specialty}s in Pakistan
          </h1>
          <p className={styles.pageSubtext}>
            Book appointments with the most experienced specialists
          </p>
        </div>
      </div>

      {/* Filter Pills */}
      <div className={styles.filtersRow}>
        {FILTERS.map((filter) => (
          <button
            key={filter}
            className={`${styles.filterPill} ${activeFilter === filter ? styles.filterPillActive : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      {filteredDoctors.length === 0 ? (
        <div className={styles.noResults}>
          <p>No doctors found for this specialty.</p>
        </div>
      ) : (
        <div className={styles.cardsList}>
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
