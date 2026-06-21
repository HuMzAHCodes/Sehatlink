import cardOnline from "../assets/images/card-online.webp"
import cardClinic from "../assets/images/card-clinic.webp"
import cardLab from "../assets/images/card-lab.webp"
import cardSurgery from "../assets/images/card-surgery.webp"
import cardMedicine from "../assets/images/card-medicine.webp"


import rakServices from "../assets/images/partners/pak_services.webp"
import caper from "../assets/images/partners/caper.webp"
import byonyks from "../assets/images/partners/byonyks.webp"
import glowfishlabs from "../assets/images/partners/glowfishlabs.webp"
import maqsad from "../assets/images/partners/maqsad.webp"
import fhmEngage from "../assets/images/partners/fhm_engage.webp"
import blink from "../assets/images/partners/blink.webp"
import chakor from "../assets/images/partners/chakor.webp"





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
  { name: "RAK Services", logo: rakServices },
  { name: "Caper", logo: caper },
  { name: "Byonyks", logo: byonyks },
  { name: "GlowFishLabs", logo: glowfishlabs },
  { name: "Maqsad", logo: maqsad },
  { name: "FHM Engage", logo: fhmEngage },
  { name: "Blink", logo: blink },
  { name: "Chakor", logo: chakor },
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









export const DOCTORS = [
  {
    id: "1",
    name: "Dr. Ahmed Raza",
    specialty: "Dermatologist",
    experience: "10 years",
    qualification: "MBBS, FCPS (Dermatology)",
    hospital: "Shifa International Hospital",
    rating: 4.8,
    reviews: 124,
    fee: 2500,
    avatar: "https://i.pravatar.cc/150?img=11",
    about: "Dr. Ahmed is a senior dermatologist with over 10 years of experience treating skin conditions.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "2",
    name: "Dr. Sara Khan",
    specialty: "Gynecologist",
    experience: "8 years",
    qualification: "MBBS, FCPS (Gynecology)",
    hospital: "Hameed Latif Hospital",
    rating: 4.9,
    reviews: 98,
    fee: 3000,
    avatar: "https://i.pravatar.cc/150?img=47",
    about: "Dr. Sara specializes in women's health and has helped thousands of patients across Pakistan.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "3",
    name: "Dr. Usman Ali",
    specialty: "Urologist",
    experience: "12 years",
    qualification: "MBBS, FCPS (Urology)",
    hospital: "Doctors Hospital",
    rating: 4.7,
    reviews: 87,
    fee: 2000,
    avatar: "https://i.pravatar.cc/150?img=15",
    about: "Dr. Usman is an experienced urologist known for his patient-friendly approach.",
    availableDays: ["Monday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
  },
  {
    id: "4",
    name: "Dr. Bilal Mahmood",
    specialty: "Gastroenterologist",
    experience: "9 years",
    qualification: "MBBS, MRCP (Gastroenterology)",
    hospital: "Aga Khan Hospital",
    rating: 4.6,
    reviews: 76,
    fee: 3500,
    avatar: "https://i.pravatar.cc/150?img=18",
    about: "Dr. Bilal treats digestive system disorders and has extensive experience in endoscopy.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["11:00 AM", "12:00 PM", "1:00 PM", "3:00 PM"],
  },
  {
    id: "5",
    name: "Dr. Zara Siddiqui",
    specialty: "Dentist",
    experience: "6 years",
    qualification: "BDS, FCPS (Orthodontics)",
    hospital: "dental Care Clinic",
    rating: 4.9,
    reviews: 210,
    fee: 1500,
    avatar: "https://i.pravatar.cc/150?img=45",
    about: "Dr. Zara is a skilled dentist specializing in orthodontics and cosmetic dentistry.",
    availableDays: ["Tuesday", "Wednesday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM", "5:00 PM"],
  },
  {
    id: "6",
    name: "Dr. Kamran Mirza",
    specialty: "Obesity Specialist",
    experience: "7 years",
    qualification: "MBBS, Diploma in Nutrition",
    hospital: "National Hospital",
    rating: 4.5,
    reviews: 54,
    fee: 2000,
    avatar: "https://i.pravatar.cc/150?img=12",
    about: "Dr. Kamran helps patients achieve healthy weight through personalized diet and medical plans.",
    availableDays: ["Monday", "Thursday"],
    timeSlots: ["10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "7",
    name: "Dr. Nadia Farooq",
    specialty: "ENT Specialist",
    experience: "11 years",
    qualification: "MBBS, FCPS (ENT)",
    hospital: "Fatima Memorial Hospital",
    rating: 4.7,
    reviews: 143,
    fee: 2500,
    avatar: "https://i.pravatar.cc/150?img=44",
    about: "Dr. Nadia specializes in ear, nose, and throat disorders with a focus on surgical treatment.",
    availableDays: ["Tuesday", "Friday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "8",
    name: "Dr. Hassan Nawaz",
    specialty: "Orthopedic Surgeon",
    experience: "15 years",
    qualification: "MBBS, FRCS (Orthopedics)",
    hospital: "Shifa International Hospital",
    rating: 4.9,
    reviews: 189,
    fee: 4000,
    avatar: "https://i.pravatar.cc/150?img=17",
    about: "Dr. Hassan is a leading orthopedic surgeon specializing in joint replacement and sports injuries.",
    availableDays: ["Monday", "Wednesday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM"],
  },
  {
    id: "9",
    name: "Dr. Imran Sheikh",
    specialty: "Sexologist",
    experience: "8 years",
    qualification: "MBBS, Diploma in Sexual Medicine",
    hospital: "Care Medical Centre",
    rating: 4.4,
    reviews: 41,
    fee: 3000,
    avatar: "https://i.pravatar.cc/150?img=13",
    about: "Dr. Imran provides confidential consultations for sexual health concerns.",
    availableDays: ["Wednesday", "Thursday", "Saturday"],
    timeSlots: ["11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "10",
    name: "Dr. Faisal Qureshi",
    specialty: "Neurologist",
    experience: "13 years",
    qualification: "MBBS, FCPS (Neurology)",
    hospital: "Aga Khan Hospital",
    rating: 4.8,
    reviews: 167,
    fee: 3500,
    avatar: "https://i.pravatar.cc/150?img=16",
    about: "Dr. Faisal is a renowned neurologist treating conditions like epilepsy, migraines and stroke.",
    availableDays: ["Monday", "Tuesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "11",
    name: "Dr. Ayesha Tariq",
    specialty: "Child Specialist",
    experience: "9 years",
    qualification: "MBBS, FCPS (Pediatrics)",
    hospital: "Children Hospital",
    rating: 4.9,
    reviews: 234,
    fee: 2000,
    avatar: "https://i.pravatar.cc/150?img=46",
    about: "Dr. Ayesha is a compassionate pediatrician dedicated to the health and wellbeing of children.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM"],
  },
  {
    id: "12",
    name: "Dr. Tariq Mehmood",
    specialty: "Pulmonologist",
    experience: "10 years",
    qualification: "MBBS, FCPS (Pulmonology)",
    hospital: "Gulab Devi Hospital",
    rating: 4.6,
    reviews: 88,
    fee: 2500,
    avatar: "https://i.pravatar.cc/150?img=14",
    about: "Dr. Tariq specializes in lung diseases including asthma, COPD and tuberculosis.",
    availableDays: ["Tuesday", "Thursday", "Friday"],
    timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "13",
    name: "Dr. Rabia Malik",
    specialty: "Eye Specialist",
    experience: "7 years",
    qualification: "MBBS, FCPS (Ophthalmology)",
    hospital: "Al-Shifa Eye Hospital",
    rating: 4.7,
    reviews: 112,
    fee: 2000,
    avatar: "https://i.pravatar.cc/150?img=48",
    about: "Dr. Rabia is an experienced ophthalmologist treating a wide range of eye conditions.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"],
  },
  {
    id: "14",
    name: "Dr. Shahid Iqbal",
    specialty: "General Physician",
    experience: "5 years",
    qualification: "MBBS",
    hospital: "Medicare Clinic",
    rating: 4.5,
    reviews: 67,
    fee: 1000,
    avatar: "https://i.pravatar.cc/150?img=19",
    about: "Dr. Shahid is a general physician providing primary healthcare for all age groups.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM"],
  },
]