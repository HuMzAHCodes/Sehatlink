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
  // ── Dermatologists ──────────────────────────────────────────────────────────
  {
    id: "1",
    name: "Dr. Ayesha Tariq",
    specialty: "Dermatologist",
    experience: "12 years",
    qualification: "MBBS, FCPS (Dermatology)",
    hospital: "Shaukat Khanum Memorial Cancer Hospital, Lahore",
    rating: 4.8,
    reviews: 214,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Ayesha Tariq is a leading dermatologist with over a decade of expertise in treating skin disorders, acne, and cosmetic skin conditions. She is known for her patient-centered approach and evidence-based treatment plans.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "2",
    name: "Dr. Faisal Mahmood",
    specialty: "Dermatologist",
    experience: "9 years",
    qualification: "MBBS, FCPS (Dermatology)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.6,
    reviews: 178,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Faisal Mahmood specializes in medical and surgical dermatology, including hair loss treatments and laser therapies. He has trained at multiple international dermatology centers.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"],
  },
  {
    id: "3",
    name: "Dr. Sana Khalid",
    specialty: "Dermatologist",
    experience: "7 years",
    qualification: "MBBS, FCPS (Dermatology)",
    hospital: "Services Hospital, Lahore",
    rating: 4.5,
    reviews: 132,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Sana Khalid focuses on pediatric and adult dermatology with special interest in eczema, psoriasis, and vitiligo management. She is appreciated for her thorough consultations and clear patient communication.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "3:00 PM"],
  },
  {
    id: "4",
    name: "Dr. Usman Riaz",
    specialty: "Dermatologist",
    experience: "15 years",
    qualification: "MBBS, FCPS (Dermatology)",
    hospital: "Mayo Hospital, Lahore",
    rating: 4.9,
    reviews: 289,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Usman Riaz is a veteran dermatologist renowned for his expertise in skin cancer detection and advanced aesthetic dermatology procedures. He has published multiple research papers in national and international journals.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
  },

  // ── Gynecologists ────────────────────────────────────────────────────────────
  {
    id: "5",
    name: "Dr. Nadia Hussain",
    specialty: "Gynecologist",
    experience: "14 years",
    qualification: "MBBS, FCPS (Gynecology & Obstetrics)",
    hospital: "Jinnah Postgraduate Medical Centre, Karachi",
    rating: 4.9,
    reviews: 276,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Nadia Hussain is a highly experienced gynecologist and obstetrician specializing in high-risk pregnancies, infertility treatments, and minimally invasive gynecological surgeries. She has helped thousands of women achieve healthy pregnancies.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "6",
    name: "Dr. Rabia Shaheen",
    specialty: "Gynecologist",
    experience: "10 years",
    qualification: "MBBS, FCPS (Gynecology & Obstetrics)",
    hospital: "Lady Reading Hospital, Peshawar",
    rating: 4.7,
    reviews: 198,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Rabia Shaheen specializes in normal and complicated deliveries, polycystic ovary syndrome, and women's reproductive health. She is committed to providing compassionate and modern care to her patients.",
    availableDays: ["Tuesday", "Wednesday", "Friday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM"],
  },
  {
    id: "7",
    name: "Dr. Saima Qureshi",
    specialty: "Gynecologist",
    experience: "18 years",
    qualification: "MBBS, FCPS (Gynecology & Obstetrics)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.8,
    reviews: 254,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Saima Qureshi is a senior gynecologist with extensive experience in laparoscopic surgery, menopause management, and cervical cancer screening. She is a Fellow of the College of Physicians and Surgeons Pakistan.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "8",
    name: "Dr. Farida Butt",
    specialty: "Gynecologist",
    experience: "8 years",
    qualification: "MBBS, FCPS (Gynecology & Obstetrics)",
    hospital: "Fatima Memorial Hospital, Lahore",
    rating: 4.5,
    reviews: 143,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Farida Butt provides comprehensive women's healthcare including antenatal care, family planning counseling, and management of gynecological infections. She is well-regarded for her empathetic and thorough approach.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },

  // ── Urologists ───────────────────────────────────────────────────────────────
  {
    id: "9",
    name: "Dr. Imran Aziz",
    specialty: "Urologist",
    experience: "13 years",
    qualification: "MBBS, FCPS (Urology)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.8,
    reviews: 187,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Imran Aziz is a skilled urologist specializing in kidney stone management, urinary tract infections, and robotic-assisted urological surgeries. He has performed over 2,000 endoscopic procedures.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "10",
    name: "Dr. Khalid Mehmood",
    specialty: "Urologist",
    experience: "16 years",
    qualification: "MBBS, FCPS (Urology)",
    hospital: "Jinnah Hospital, Lahore",
    rating: 4.7,
    reviews: 231,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Khalid Mehmood has extensive expertise in prostate diseases, bladder disorders, and male infertility. He is known for his minimally invasive surgical techniques that reduce patient recovery time significantly.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "11",
    name: "Dr. Tariq Hassan",
    specialty: "Urologist",
    experience: "11 years",
    qualification: "MBBS, FCPS (Urology)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.6,
    reviews: 162,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Tariq Hassan specializes in pediatric and adult urology with a focus on reconstructive procedures and urological cancers. He completed his advanced fellowship training in the United Kingdom.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "12",
    name: "Dr. Asad Ullah",
    specialty: "Urologist",
    experience: "8 years",
    qualification: "MBBS, FCPS (Urology)",
    hospital: "Pakistan Institute of Medical Sciences, Islamabad",
    rating: 4.4,
    reviews: 98,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Asad Ullah provides expert care in managing kidney diseases, urinary incontinence, and sexual health disorders in men. He is passionate about patient education and preventive urology.",
    availableDays: ["Monday", "Tuesday", "Friday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM"],
  },

  // ── Gastroenterologists ──────────────────────────────────────────────────────
  {
    id: "13",
    name: "Dr. Zubair Akhtar",
    specialty: "Gastroenterologist",
    experience: "14 years",
    qualification: "MBBS, FCPS (Gastroenterology)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.9,
    reviews: 263,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Zubair Akhtar is an expert in diagnosing and treating digestive disorders including Crohn's disease, ulcerative colitis, and hepatitis. He is highly proficient in advanced endoscopic procedures.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "14",
    name: "Dr. Maryam Shahid",
    specialty: "Gastroenterologist",
    experience: "9 years",
    qualification: "MBBS, FCPS (Gastroenterology)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.6,
    reviews: 144,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Maryam Shahid specializes in gastric disorders, irritable bowel syndrome, and liver diseases with a strong focus on functional gastrointestinal conditions. She approaches each patient holistically, combining medical and dietary management.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
  },
  {
    id: "15",
    name: "Dr. Naveed Iqbal",
    specialty: "Gastroenterologist",
    experience: "20 years",
    qualification: "MBBS, FCPS (Gastroenterology)",
    hospital: "Mayo Hospital, Lahore",
    rating: 4.8,
    reviews: 298,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Naveed Iqbal is a senior gastroenterologist with two decades of experience in colonoscopy, ERCP, and management of pancreatic diseases. He has trained numerous medical fellows and is a respected figure in academic medicine.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "2:00 PM"],
  },
  {
    id: "16",
    name: "Dr. Hira Baig",
    specialty: "Gastroenterologist",
    experience: "6 years",
    qualification: "MBBS, FCPS (Gastroenterology)",
    hospital: "Liaquat National Hospital, Karachi",
    rating: 4.4,
    reviews: 87,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Hira Baig is a dedicated gastroenterologist focusing on hepatitis B and C management, GERD, and peptic ulcer disease. She believes in building long-term therapeutic relationships with her patients.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "11:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"],
  },

  // ── Dentists ─────────────────────────────────────────────────────────────────
  {
    id: "17",
    name: "Dr. Bilal Chaudhry",
    specialty: "Dentist",
    experience: "11 years",
    qualification: "MBBS, FCPS (Dentistry)",
    hospital: "Dow University of Health Sciences, Karachi",
    rating: 4.7,
    reviews: 203,
    fee: 1500,
    avatar: "",
    about:
      "Dr. Bilal Chaudhry is a cosmetic and restorative dentist with expertise in dental implants, veneers, and teeth whitening. He is committed to providing pain-free dental experiences using the latest technology.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "18",
    name: "Dr. Amina Farooq",
    specialty: "Dentist",
    experience: "7 years",
    qualification: "MBBS, FCPS (Dentistry)",
    hospital: "Fatima Memorial Hospital, Lahore",
    rating: 4.5,
    reviews: 156,
    fee: 1200,
    avatar: "",
    about:
      "Dr. Amina Farooq specializes in orthodontics and pediatric dentistry, helping patients achieve healthy and confident smiles from a young age. She is gentle in her approach and especially popular with children.",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "19",
    name: "Dr. Raza Kazmi",
    specialty: "Dentist",
    experience: "15 years",
    qualification: "MBBS, FCPS (Dentistry)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.9,
    reviews: 271,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Raza Kazmi is a highly skilled prosthodontist and oral surgeon with extensive experience in full-mouth rehabilitation and maxillofacial surgeries. He has completed advanced training in implantology in Germany.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "20",
    name: "Dr. Saba Mirza",
    specialty: "Dentist",
    experience: "5 years",
    qualification: "MBBS, FCPS (Dentistry)",
    hospital: "Pakistan Institute of Medical Sciences, Islamabad",
    rating: 4.3,
    reviews: 64,
    fee: 1000,
    avatar: "",
    about:
      "Dr. Saba Mirza provides comprehensive dental care including fillings, root canals, and periodontal treatment with a focus on preventive dentistry. She educates her patients on proper oral hygiene to avoid future dental problems.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM", "5:00 PM"],
  },

  // ── Obesity Specialists ──────────────────────────────────────────────────────
  {
    id: "21",
    name: "Dr. Omar Shahzad",
    specialty: "Obesity Specialist",
    experience: "10 years",
    qualification: "MBBS, FCPS (Obesity Medicine)",
    hospital: "Shaukat Khanum Memorial Cancer Hospital, Lahore",
    rating: 4.7,
    reviews: 167,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Omar Shahzad is a certified obesity medicine specialist who offers comprehensive weight management programs combining medical, dietary, and behavioral strategies. He has helped hundreds of patients achieve sustainable weight loss.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "22",
    name: "Dr. Lubna Ansari",
    specialty: "Obesity Specialist",
    experience: "8 years",
    qualification: "MBBS, FCPS (Obesity Medicine)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.6,
    reviews: 134,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Lubna Ansari specializes in medical management of obesity including bariatric pharmacotherapy and metabolic syndrome treatment. She works closely with dietitians and psychologists to deliver holistic care.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "23",
    name: "Dr. Junaid Rafiq",
    specialty: "Obesity Specialist",
    experience: "12 years",
    qualification: "MBBS, FCPS (Obesity Medicine)",
    hospital: "Jinnah Postgraduate Medical Centre, Karachi",
    rating: 4.8,
    reviews: 192,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Junaid Rafiq is an expert in the management of morbid obesity and its comorbidities including type 2 diabetes and hypertension. He conducts structured weight loss clinics and provides long-term follow-up care.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    timeSlots: ["8:00 AM", "9:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "24",
    name: "Dr. Hina Nawaz",
    specialty: "Obesity Specialist",
    experience: "6 years",
    qualification: "MBBS, FCPS (Obesity Medicine)",
    hospital: "Services Hospital, Lahore",
    rating: 4.4,
    reviews: 79,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Hina Nawaz focuses on childhood and adolescent obesity, offering family-centered treatment plans that incorporate lifestyle modification and nutritional counseling. She is passionate about fighting the rising tide of obesity in Pakistan.",
    availableDays: ["Monday", "Wednesday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"],
  },

  // ── ENT Specialists ──────────────────────────────────────────────────────────
  {
    id: "25",
    name: "Dr. Arif Saleem",
    specialty: "ENT Specialist",
    experience: "16 years",
    qualification: "MBBS, FCPS (ENT)",
    hospital: "Mayo Hospital, Lahore",
    rating: 4.8,
    reviews: 247,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Arif Saleem is a senior ENT surgeon specializing in endoscopic sinus surgery, cochlear implants, and head and neck oncology. He has performed thousands of successful ENT surgeries over his illustrious career.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "26",
    name: "Dr. Farah Naz",
    specialty: "ENT Specialist",
    experience: "9 years",
    qualification: "MBBS, FCPS (ENT)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.6,
    reviews: 158,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Farah Naz provides expert care in ear disorders, hearing loss, vertigo, and pediatric ENT conditions. She uses state-of-the-art audiological equipment for accurate diagnosis and effective treatment.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "27",
    name: "Dr. Shahid Anwar",
    specialty: "ENT Specialist",
    experience: "13 years",
    qualification: "MBBS, FCPS (ENT)",
    hospital: "Liaquat National Hospital, Karachi",
    rating: 4.7,
    reviews: 189,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Shahid Anwar specializes in rhinology and laryngology with extensive experience in nasal polyp removal, voice disorders, and snoring treatment. He is known for his precise surgical skills and excellent patient outcomes.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "28",
    name: "Dr. Madiha Zafar",
    specialty: "ENT Specialist",
    experience: "7 years",
    qualification: "MBBS, FCPS (ENT)",
    hospital: "Lady Reading Hospital, Peshawar",
    rating: 4.4,
    reviews: 103,
    fee: 1500,
    avatar: "",
    about:
      "Dr. Madiha Zafar handles a wide spectrum of ENT diseases including tonsillitis, sinusitis, and ear infections with a special focus on pediatric patients. She is dedicated to delivering accessible ENT care to underserved communities.",
    availableDays: ["Monday", "Tuesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "12:00 PM", "4:00 PM"],
  },

  // ── Orthopedic Surgeons ──────────────────────────────────────────────────────
  {
    id: "29",
    name: "Dr. Hamza Rao",
    specialty: "Orthopedic Surgeon",
    experience: "14 years",
    qualification: "MBBS, FCPS (Orthopedic Surgery)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.9,
    reviews: 284,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Hamza Rao is a leading orthopedic surgeon with expertise in joint replacement, arthroscopy, and sports injury management. He has trained at prestigious institutions in the UK and Canada.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "30",
    name: "Dr. Rizwan Malik",
    specialty: "Orthopedic Surgeon",
    experience: "18 years",
    qualification: "MBBS, FCPS (Orthopedic Surgery)",
    hospital: "Jinnah Hospital, Lahore",
    rating: 4.8,
    reviews: 259,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Rizwan Malik specializes in spine surgery, trauma management, and pediatric orthopedics. He has pioneered minimally invasive spinal techniques in Pakistan, significantly improving recovery outcomes for his patients.",
    availableDays: ["Monday", "Tuesday", "Thursday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"],
  },
  {
    id: "31",
    name: "Dr. Saira Babar",
    specialty: "Orthopedic Surgeon",
    experience: "10 years",
    qualification: "MBBS, FCPS (Orthopedic Surgery)",
    hospital: "Pakistan Institute of Medical Sciences, Islamabad",
    rating: 4.6,
    reviews: 172,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Saira Babar is one of Pakistan's prominent female orthopedic surgeons focusing on osteoporosis management, hand surgery, and fracture fixation. She is an advocate for women's bone health and conducts regular awareness sessions.",
    availableDays: ["Tuesday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM"],
  },
  {
    id: "32",
    name: "Dr. Ahsan Nisar",
    specialty: "Orthopedic Surgeon",
    experience: "8 years",
    qualification: "MBBS, FCPS (Orthopedic Surgery)",
    hospital: "Fatima Memorial Hospital, Lahore",
    rating: 4.5,
    reviews: 128,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Ahsan Nisar provides expert orthopedic care including knee and shoulder arthroscopy, ligament repairs, and post-surgical rehabilitation guidance. He has a special interest in sports medicine and athletic injury prevention.",
    availableDays: ["Monday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  },

  // ── Sexologists ──────────────────────────────────────────────────────────────
  {
    id: "33",
    name: "Dr. Naseer Ahmed",
    specialty: "Sexologist",
    experience: "15 years",
    qualification: "MBBS, FCPS (Sexology)",
    hospital: "Jinnah Postgraduate Medical Centre, Karachi",
    rating: 4.7,
    reviews: 148,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Naseer Ahmed is a highly experienced sexologist offering confidential consultations for sexual health disorders, erectile dysfunction, and relationship counseling. He creates a safe, non-judgmental environment for his patients.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "34",
    name: "Dr. Kamran Siddiqui",
    specialty: "Sexologist",
    experience: "11 years",
    qualification: "MBBS, FCPS (Sexology)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.6,
    reviews: 119,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Kamran Siddiqui specializes in male and female sexual dysfunction, hormonal imbalances, and psychosexual therapy. He employs evidence-based protocols and maintains strict patient confidentiality.",
    availableDays: ["Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "35",
    name: "Dr. Rukhsana Anjum",
    specialty: "Sexologist",
    experience: "9 years",
    qualification: "MBBS, FCPS (Sexology)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.5,
    reviews: 97,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Rukhsana Anjum is a female sexologist providing compassionate care for women's sexual health concerns including dyspareunia, low libido, and intimacy disorders. She combines medical treatment with psychological counseling for comprehensive care.",
    availableDays: ["Monday", "Wednesday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
  },
  {
    id: "36",
    name: "Dr. Waqas Hameed",
    specialty: "Sexologist",
    experience: "7 years",
    qualification: "MBBS, FCPS (Sexology)",
    hospital: "Services Hospital, Lahore",
    rating: 4.3,
    reviews: 72,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Waqas Hameed addresses a broad range of sexual health issues including premature ejaculation, sexual anxiety, and couple therapy. He is known for his approachable manner and discreet practice.",
    availableDays: ["Tuesday", "Thursday", "Friday", "Saturday"],
    timeSlots: ["9:00 AM", "11:00 AM", "12:00 PM", "3:00 PM"],
  },

  // ── Neurologists ─────────────────────────────────────────────────────────────
  {
    id: "37",
    name: "Dr. Zahid Hussain",
    specialty: "Neurologist",
    experience: "17 years",
    qualification: "MBBS, FCPS (Neurology)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.9,
    reviews: 278,
    fee: 4500,
    avatar: "",
    about:
      "Dr. Zahid Hussain is an eminent neurologist specializing in stroke management, epilepsy, and neurodegenerative diseases. He is a pioneer of the stroke unit at his institution and has led multiple clinical trials.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "2:00 PM"],
  },
  {
    id: "38",
    name: "Dr. Zainab Rauf",
    specialty: "Neurologist",
    experience: "10 years",
    qualification: "MBBS, FCPS (Neurology)",
    hospital: "Shaukat Khanum Memorial Cancer Hospital, Lahore",
    rating: 4.7,
    reviews: 196,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Zainab Rauf specializes in headache disorders, multiple sclerosis, and neuroimmunology. She is devoted to improving quality of life for patients with chronic neurological conditions through personalized care plans.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "39",
    name: "Dr. Pervaiz Alam",
    specialty: "Neurologist",
    experience: "22 years",
    qualification: "MBBS, FCPS (Neurology)",
    hospital: "Pakistan Institute of Medical Sciences, Islamabad",
    rating: 4.8,
    reviews: 301,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Pervaiz Alam is one of Pakistan's most seasoned neurologists, with expertise spanning Parkinson's disease, dementia, and neuromuscular disorders. He is an active member of multiple international neurological societies.",
    availableDays: ["Monday", "Wednesday", "Thursday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"],
  },
  {
    id: "40",
    name: "Dr. Kiran Yousaf",
    specialty: "Neurologist",
    experience: "8 years",
    qualification: "MBBS, FCPS (Neurology)",
    hospital: "Jinnah Hospital, Lahore",
    rating: 4.5,
    reviews: 123,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Kiran Yousaf focuses on pediatric and adult neurology with special interest in nerve conduction studies and botulinum toxin therapy for movement disorders. She is praised for her thorough diagnostic approach.",
    availableDays: ["Monday", "Tuesday", "Friday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
  },

  // ── Child Specialists ────────────────────────────────────────────────────────
  {
    id: "41",
    name: "Dr. Sajid Mehmood",
    specialty: "Child Specialist",
    experience: "13 years",
    qualification: "MBBS, FCPS (Pediatrics)",
    hospital: "Children's Hospital, Lahore",
    rating: 4.9,
    reviews: 292,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Sajid Mehmood is a renowned pediatrician managing newborn care, childhood infections, and developmental disorders. Parents trust him for his thorough assessments and warm, reassuring bedside manner.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "42",
    name: "Dr. Tahira Naqvi",
    specialty: "Child Specialist",
    experience: "11 years",
    qualification: "MBBS, FCPS (Pediatrics)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.8,
    reviews: 234,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Tahira Naqvi specializes in pediatric endocrinology, neonatology, and childhood nutritional disorders. She is deeply committed to child welfare and actively volunteers for pediatric health outreach programs.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM"],
  },
  {
    id: "43",
    name: "Dr. Asim Raza",
    specialty: "Child Specialist",
    experience: "9 years",
    qualification: "MBBS, FCPS (Pediatrics)",
    hospital: "National Institute of Child Health, Karachi",
    rating: 4.6,
    reviews: 167,
    fee: 1500,
    avatar: "",
    about:
      "Dr. Asim Raza provides comprehensive pediatric care from infancy through adolescence, with expertise in respiratory infections, childhood allergies, and vaccination programs. He is particularly skilled in managing children with complex chronic illnesses.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM"],
  },
  {
    id: "44",
    name: "Dr. Mariam Alvi",
    specialty: "Child Specialist",
    experience: "6 years",
    qualification: "MBBS, FCPS (Pediatrics)",
    hospital: "Fatima Memorial Hospital, Lahore",
    rating: 4.4,
    reviews: 88,
    fee: 1500,
    avatar: "",
    about:
      "Dr. Mariam Alvi is a caring pediatrician with a focus on growth and development monitoring, childhood immunizations, and management of common pediatric illnesses. She creates a child-friendly environment that keeps young patients at ease.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"],
  },

  // ── Pulmonologists ───────────────────────────────────────────────────────────
  {
    id: "45",
    name: "Dr. Shahzad Akhtar",
    specialty: "Pulmonologist",
    experience: "14 years",
    qualification: "MBBS, FCPS (Pulmonology)",
    hospital: "Jinnah Postgraduate Medical Centre, Karachi",
    rating: 4.8,
    reviews: 221,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Shahzad Akhtar is a distinguished pulmonologist specializing in asthma, COPD, sleep apnea, and interventional bronchoscopy. He heads the respiratory therapy unit at his hospital and trains junior physicians.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "46",
    name: "Dr. Nosheen Iqbal",
    specialty: "Pulmonologist",
    experience: "9 years",
    qualification: "MBBS, FCPS (Pulmonology)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.6,
    reviews: 153,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Nosheen Iqbal specializes in tuberculosis management, interstitial lung disease, and pulmonary rehabilitation. She is particularly active in TB eradication campaigns across Pakistan.",
    availableDays: ["Wednesday", "Thursday", "Friday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "47",
    name: "Dr. Ejaz Ahmed",
    specialty: "Pulmonologist",
    experience: "20 years",
    qualification: "MBBS, FCPS (Pulmonology)",
    hospital: "Mayo Hospital, Lahore",
    rating: 4.9,
    reviews: 287,
    fee: 4000,
    avatar: "",
    about:
      "Dr. Ejaz Ahmed is a highly respected pulmonologist with two decades of experience in managing critical respiratory conditions including pneumonia, lung fibrosis, and pulmonary hypertension. He serves on multiple national respiratory health committees.",
    availableDays: ["Monday", "Wednesday", "Thursday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
  },
  {
    id: "48",
    name: "Dr. Aisha Mirza",
    specialty: "Pulmonologist",
    experience: "7 years",
    qualification: "MBBS, FCPS (Pulmonology)",
    hospital: "Liaquat National Hospital, Karachi",
    rating: 4.5,
    reviews: 109,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Aisha Mirza focuses on pediatric and adult pulmonology with special interest in cystic fibrosis, bronchiectasis, and allergy-induced asthma. She combines clinical expertise with a strong emphasis on patient education.",
    availableDays: ["Monday", "Tuesday", "Friday"],
    timeSlots: ["9:00 AM", "11:00 AM", "12:00 PM", "3:00 PM"],
  },

  // ── Eye Specialists ──────────────────────────────────────────────────────────
  {
    id: "49",
    name: "Dr. Tariq Javed",
    specialty: "Eye Specialist",
    experience: "16 years",
    qualification: "MBBS, FCPS (Ophthalmology)",
    hospital: "Layton Rahmatulla Benevolent Trust, Lahore",
    rating: 4.9,
    reviews: 268,
    fee: 2500,
    avatar: "",
    about:
      "Dr. Tariq Javed is a leading ophthalmologist renowned for his expertise in cataract surgery, LASIK, and retinal detachment repair. He has restored vision for thousands of patients across Pakistan.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM"],
  },
  {
    id: "50",
    name: "Dr. Shazia Malik",
    specialty: "Eye Specialist",
    experience: "11 years",
    qualification: "MBBS, FCPS (Ophthalmology)",
    hospital: "Aga Khan University Hospital, Karachi",
    rating: 4.7,
    reviews: 184,
    fee: 3000,
    avatar: "",
    about:
      "Dr. Shazia Malik specializes in glaucoma management, corneal diseases, and pediatric ophthalmology. She is an advocate for early eye screenings in schools and has contributed significantly to childhood blindness prevention programs.",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "51",
    name: "Dr. Nadeem Farhan",
    specialty: "Eye Specialist",
    experience: "13 years",
    qualification: "MBBS, FCPS (Ophthalmology)",
    hospital: "Shifa International Hospital, Islamabad",
    rating: 4.8,
    reviews: 207,
    fee: 3500,
    avatar: "",
    about:
      "Dr. Nadeem Farhan is a vitreoretinal surgeon with extensive experience in diabetic eye disease, age-related macular degeneration, and intraocular tumor management. His surgical precision is widely recognized among peers.",
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM"],
  },
  {
    id: "52",
    name: "Dr. Rima Nawab",
    specialty: "Eye Specialist",
    experience: "6 years",
    qualification: "MBBS, FCPS (Ophthalmology)",
    hospital: "Jinnah Hospital, Lahore",
    rating: 4.4,
    reviews: 91,
    fee: 1500,
    avatar: "",
    about:
      "Dr. Rima Nawab provides thorough eye examinations, prescription glasses consultations, and treatment of common eye disorders such as conjunctivitis, dry eyes, and uveitis. She prioritizes early detection to prevent long-term vision loss.",
    availableDays: ["Monday", "Tuesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"],
  },

  // ── General Physicians ───────────────────────────────────────────────────────
  {
    id: "53",
    name: "Dr. Haroon Rashid",
    specialty: "General Physician",
    experience: "18 years",
    qualification: "MBBS, FCPS (General Medicine)",
    hospital: "Mayo Hospital, Lahore",
    rating: 4.8,
    reviews: 296,
    fee: 1500,
    avatar: "",
    about:
      "Dr. Haroon Rashid is an experienced general physician managing a wide spectrum of acute and chronic conditions including diabetes, hypertension, and infectious diseases. He is trusted by his patients for his thorough and holistic approach.",
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "54",
    name: "Dr. Uzma Batool",
    specialty: "General Physician",
    experience: "10 years",
    qualification: "MBBS, FCPS (General Medicine)",
    hospital: "Fatima Memorial Hospital, Lahore",
    rating: 4.6,
    reviews: 217,
    fee: 1200,
    avatar: "",
    about:
      "Dr. Uzma Batool is a compassionate general physician who provides primary care consultations for fever, respiratory infections, gastrointestinal complaints, and preventive health check-ups. She is especially popular among families for her friendly and comprehensive approach.",
    availableDays: ["Monday", "Wednesday", "Friday", "Saturday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM"],
  },
  {
    id: "55",
    name: "Dr. Zia Ul Haq",
    specialty: "General Physician",
    experience: "25 years",
    qualification: "MBBS, FCPS (General Medicine)",
    hospital: "Pakistan Institute of Medical Sciences, Islamabad",
    rating: 4.9,
    reviews: 299,
    fee: 2000,
    avatar: "",
    about:
      "Dr. Zia Ul Haq is a veteran physician with a quarter century of experience in internal medicine and primary care. He is known for his exceptional diagnostic acumen and long-term patient relationships that span generations.",
    availableDays: ["Monday", "Tuesday", "Thursday", "Friday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
  },
  {
    id: "56",
    name: "Dr. Huma Rasheed",
    specialty: "General Physician",
    experience: "7 years",
    qualification: "MBBS, FCPS (General Medicine)",
    hospital: "Liaquat National Hospital, Karachi",
    rating: 4.4,
    reviews: 118,
    fee: 1000,
    avatar: "",
    about:
      "Dr. Huma Rasheed offers accessible general medical care covering routine health screenings, chronic disease management, and minor ailment treatment. She is dedicated to preventive medicine and patient health literacy.",
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "4:00 PM", "5:00 PM"],
  },
];