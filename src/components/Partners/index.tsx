import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PARTNERS } from "../../constants/data";
import PartnerLogo from "./PartnerLogo";
import styles from "./Partners.module.css";

const Partners = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    const totalWidth = marqueeEl.scrollWidth / 2;

    animationRef.current = gsap.to(marqueeEl, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => animationRef.current?.pause();
  const handleMouseLeave = () => animationRef.current?.resume();

  return (
    <section className={styles.partnersSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Our Esteemed Partners</h2>
        <p className={styles.sectionSubtext}>
          Avail Exclusive partnership benefits for your brand, clients and
          employees.
        </p>
        <button className={styles.partnerButton}>Partner with Sehatlink</button>
      </div>

      <div
        className={styles.marqueeWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.marqueeTrack} ref={marqueeRef}>
          {duplicatedPartners.map((partner, index) => (
            <PartnerLogo
              key={`${partner.name}-${index}`}
              name={partner.name}
              logo={partner.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
