import cardOnline from "../assets/images/card-online.webp"
import cardClinic from "../assets/images/card-clinic.webp"
import cardLab from "../assets/images/card-lab.webp"
import cardSurgery from "../assets/images/card-surgery.webp"
import cardMedicine from "../assets/images/card-medicine.webp"








export const NAV_LINKS = [
  { label: "Doctors", href: "#", hasDropdown: true },
  { label: "Hospitals", href: "#", hasDropdown: true },
  { label: "Labs and Diagnostics", href: "#", hasDropdown: true },
  { label: "Surgeries", href: "#", hasDropdown: false },
  { label: "Health Blog", href: "#", hasDropdown: false },
]

export const FEATURE_CARDS = [
  {
    image: cardOnline,
    badge: "27 Doctors Online Now",
    title: "Consult Online Now",
    description: "Instantly connect with Specialists through Video call.",
  },
  {
   image: cardClinic,
    badge: null,
    title: "In-Clinic Appointments",
    description: "Book an In-Person visit to doctor's clinic.",
  },
  {
    image: cardLab,
    badge: null,
    title: "Laboratory Tests",
    description: "Avail Exclusive discounts on lab tests.",
  },
  {
    image: cardSurgery,
    badge: null,
    title: "Procedures & Surgeries",
    description: "Plan your surgeries at discounted rates.",
  },
  {
    image: cardMedicine,
    badge: null,
    title: "Medicines",
    description: "Know your medicines better",
  },
]

export const SPECIALTIES = [
  { label: "Dermatologist" },
  { label: "Gynecologist" },
  { label: "Urologist" },
  { label: "Gastroenterologist" },
  { label: "Dentist" },
  { label: "Obesity Specialist" },
  { label: "ENT Specialist" },
  { label: "Orthopedic Surgeon" },
  { label: "Sexologist" },
  { label: "Neurologist" },
  { label: "Child Specialist" },
  { label: "Pulmonologist" },
  { label: "Eye Specialist" },
  { label: "General Physician" },
]

export const CONDITIONS = [
  { label: "Fever" },
  { label: "Heart Attack" },
  { label: "Pregnancy" },
  { label: "High Blood Pressure" },
  { label: "Piles" },
  { label: "Diarrhea" },
  { label: "Acne" },
]

export const PARTNERS = [
  { name: "RAK Services" },
  { name: "Caper" },
  { name: "Byonyks" },
  { name: "GlowFishLabs" },
  { name: "Maqsad" },
  { name: "FHM Engage" },
  { name: "Blink" },
  { name: "Chakor" },
]

export const NEWS_ITEMS = [
  {
    outlet: "SAMAA",
    excerpt:
      "Yango passengers, partner's drivers will have opportunity to subscribe to oladoc's healthcare services.",
    link: "#",
  },
  {
    outlet: "ProPakistani",
    excerpt:
      "Mobilink Bank partners with oladoc, bringing premium healthcare to customers' doorstep.",
    link: "#",
  },
  {
    outlet: "The Nation",
    excerpt:
      "SIMOSA has partnered with oladoc to provide healthcare content to SIMOSA users and enhance their digital experience.",
    link: "#",
  },
  {
    outlet: "Tribune",
    excerpt:
      "Jubilee Life partners with oladoc to provide healthcare services to Life employees and app users.",
    link: "#",
  },
]

export const REVIEWS = [
  {
    stars: 5,
    quote:
      "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan.",
    avatar: "https://i.pravatar.cc/60?img=11",
    name: "Umer Fayyaz",
  },
  {
    stars: 5,
    quote:
      "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all.",
    avatar: "https://i.pravatar.cc/60?img=32",
    name: "Aneeb Ryan",
  },
  {
    stars: 5,
    quote:
      "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding.",
    avatar: "https://i.pravatar.cc/60?img=47",
    name: "Zainab Tariq",
  },
]

export const FOOTER_COMPANY_LINKS = [
  "About us", "Privacy policy", "Delivery Policy",
  "Refund Policy", "Payment Terms", "Contact us",
  "Terms of Use", "Cancellation Policy", "FAQs", "Process",
]

export const FOOTER_CITIES = [
  "Karachi", "Lahore", "Islamabad", "Rawalpindi",
  "Multan", "Peshawar", "Gujranwala", "Faisalabad",
  "Sargodha", "Bahawalpur", "Quetta", "Wah Cantt", "Hyderabad",
]

export const FOOTER_HOSPITALS = [
  "Doctors Hospital", "Hameed Latif Hospital", "National Hospital",
  "Fatima Memorial Hospital", "Omar Hospital & Cardiac Centre",
  "All Medical Centre", "Shifa International Hospital",
]

export const FOOTER_LAB_TESTS = [
  "MRI in Lahore", "X-RAY in Lahore", "CT Scan in Lahore",
  "Mammography in Lahore", "Ultrasound in Lahore",
]