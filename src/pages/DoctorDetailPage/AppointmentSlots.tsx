import { useState } from "react";
import styles from "./DoctorDetailPage.module.css";

interface AppointmentSlotsProps {
  availableDays: string[];
  timeSlots: string[];
}

const AppointmentSlots = ({
  availableDays,
  timeSlots,
}: AppointmentSlotsProps) => {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const handleBook = () => {
    if (!selectedDay || !selectedSlot) return;
    setBooked(true);
  };

  return (
    <div className={styles.appointmentSection}>
      <h3 className={styles.sectionTitle}>Book Appointment</h3>

      {/* Day Selector */}
      <div className={styles.subsectionTitle}>Select Day</div>
      <div className={styles.daysRow}>
        {availableDays.map((day) => (
          <button
            key={day}
            className={`${styles.dayButton} ${selectedDay === day ? styles.dayButtonActive : ""}`}
            onClick={() => {
              setSelectedDay(day);
              setSelectedSlot(null);
              setBooked(false);
            }}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Time Slots */}
      {selectedDay && (
        <>
          <div className={styles.subsectionTitle}>Select Time</div>
          <div className={styles.slotsGrid}>
            {timeSlots.map((slot) => (
              <button
                key={slot}
                className={`${styles.slotButton} ${selectedSlot === slot ? styles.slotButtonActive : ""}`}
                onClick={() => {
                  setSelectedSlot(slot);
                  setBooked(false);
                }}
              >
                {slot}
              </button>
            ))}
          </div>
        </>
      )}

      {/* Book Button */}
      {selectedDay && selectedSlot && !booked && (
        <button className={styles.bookButton} onClick={handleBook}>
          Confirm Appointment — {selectedDay} at {selectedSlot}
        </button>
      )}

      {/* Confirmation */}
      {booked && (
        <div className={styles.confirmation}>
          ✅ Appointment confirmed for <strong>{selectedDay}</strong> at{" "}
          <strong>{selectedSlot}</strong>
        </div>
      )}
    </div>
  );
};

export default AppointmentSlots;
