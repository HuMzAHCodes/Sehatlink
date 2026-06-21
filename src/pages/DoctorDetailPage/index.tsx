import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { DOCTORS } from "../../constants/data";
import DoctorInfo from "./DoctorInfo";
import AppointmentSlots from "./AppointmentSlots";
import styles from "./DoctorDetailPage.module.css";

const DoctorDetailPage = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const doctor = DOCTORS.find((doc) => doc.id === doctorId);

  if (!doctor) {
    return (
      <div className={styles.notFound}>
        <p>Doctor not found.</p>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FiArrowLeft />
        Back
      </button>

      <div className={styles.content}>
        <DoctorInfo
          name={doctor.name}
          specialty={doctor.specialty}
          experience={doctor.experience}
          qualification={doctor.qualification}
          hospital={doctor.hospital}
          rating={doctor.rating}
          reviews={doctor.reviews}
          fee={doctor.fee}
          avatar={doctor.avatar}
          about={doctor.about}
        />
        <AppointmentSlots
          availableDays={doctor.availableDays}
          timeSlots={doctor.timeSlots}
        />
      </div>
    </div>
  );
};

export default DoctorDetailPage;
