
import { Home, ListChecks, ClipboardCheck, Newspaper, Mail, FlaskConical, HeartPulse, Droplet, Activity, TestTube2, FileText, ShieldCheck, MapPin, Phone, Users, Clock, Pill, Leaf } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: ListChecks },
  { href: '/preparation', label: 'Test Preparation', icon: ClipboardCheck },
  { href: '/blog', label: 'Blog', icon: Newspaper },
  { href: '/contact', label: 'Contact Us', icon: Mail },
];

export interface LabServiceProfile {
  id: string;
  name: string;
  testsIncluded: string[];
  rate: number;
  icon: LucideIcon;
  image: string;
  dataAiHint: string;
}

export const LAB_SERVICE_PROFILES: LabServiceProfile[] = [
  {
    id: 'diabetic-profile',
    name: 'Diabetic Profile - 4',
    testsIncluded: [
      'Blood Sugar (Fasting)',
      'Urine Sugar (Fasting)',
      'HBA1C',
      'Mean Blood Glucose'
    ],
    rate: 400,
    icon: Activity,
    image: '/images/diabetes.jpeg',
    dataAiHint: 'diabetes care'
  },
  {
    id: 'lipid-profile',
    name: 'Lipid Profile - 7',
    testsIncluded: [
      'Total Cholesterol',
      'HDL Cholesterol',
      'LDL / VLDL Cholesterol',
      'Cholesterol/HDL Ratio'
    ],
    rate: 300,
    icon: HeartPulse,
    image: '/images/lipidprofile.jpeg',
    dataAiHint: 'heart health'
  },
  {
    id: 'liver-function-test',
    name: 'Liver Function Test - 11',
    testsIncluded: [
      'SGOT / SGPT',
      'GGT',
      'Alkaline phosphatase',
      'Bilirubin (Total/Direct/Indirect)',
      'Total Protein',
      'Albumin',
      'Globulin',
      'A/G Ratio'
    ],
    rate: 400,
    icon: FlaskConical,
    image: '/images/liverfunction.jpeg',
    dataAiHint: 'liver anatomy'
  },
  {
    id: 'kidney-profile',
    name: 'Kidney Profile - 4',
    testsIncluded: [
      'Urea',
      'Creatinine',
      'Uric acid',
      'Calcium'
    ],
    rate: 300,
    icon: Droplet,
    image: '/images/kidneyfunction.jpeg',
    dataAiHint: 'kidney care'
  },
  {
    id: 'thyroid-function-test',
    name: 'Thyroid Function Test - 3',
    testsIncluded: [
      'T3',
      'T4',
      'TSH'
    ],
    rate: 300,
    icon: ShieldCheck,
    image: '/images/thyroid.jpeg',
    dataAiHint: 'thyroid gland'
  },
  {
    id: 'cardiac-risk-profile',
    name: 'Cardiac Risk Profile - 5',
    testsIncluded: [
      'Apo A1',
      'Apo B',
      'Lipo Protein A',
      'CRP(HS)',
      'Apo B/Apo A1 Ratio'
    ],
    rate: 1500,
    icon: HeartPulse,
    image: '/images/cardiacprofile.jpeg',
    dataAiHint: 'cardiac test'
  },
  {
    id: 'complete-blood-count',
    name: 'Complete Blood Count - 4',
    testsIncluded: [
      'HB',
      'TC',
      'DC',
      'Platelet count, etc..'
    ],
    rate: 150,
    icon: TestTube2,
    image: '/images/completebloodcount.jpeg',
    dataAiHint: 'blood cells'
  },
  {
    id: 'urine-complete-examination',
    name: 'Urine Complete Examination',
    testsIncluded: [
      'Comprehensive analysis of urine sample including physical, chemical, and microscopic examination.'
    ],
    rate: 60,
    icon: FileText,
    image: '/images/urinetest.jpeg',
    dataAiHint: 'urine test report'
  }
];


export interface TestPreparationGuideline {
  id: string;
  title: string;
  icon: LucideIcon;
  details: string[];
}

export const TEST_PREPARATION_GUIDELINES: TestPreparationGuideline[] = [
  {
    id: 'fasting',
    title: 'Fasting Requirements',
    icon: Clock,
    details: [
      'Some tests require fasting for 8-12 hours prior. This means no food or drink, except water.',
      'Consult your doctor or our staff if you are unsure about fasting for your specific test.',
      'Common fasting tests include glucose tolerance tests and lipid profiles.',
    ],
  },
  {
    id: 'medication',
    title: 'Medication Adjustments',
    icon: Pill,
    details: [
      'Inform your doctor and our lab staff about any medications you are currently taking.',
      'Some medications may need to be temporarily stopped or adjusted before certain tests.',
      'Do not stop any medication unless specifically instructed by your doctor.',
    ],
  },
  {
    id: 'hydration',
    title: 'Hydration',
    icon: Droplet,
    details: [
      'Drink plenty of water before your test, unless instructed otherwise (e.g., for urine concentration tests).',
      'Good hydration can make blood draws easier.',
    ],
  },
  {
    id: 'general',
    title: 'General Instructions',
    icon: Users,
    details: [
      'Arrive a few minutes early for your appointment to complete any necessary paperwork.',
      'Wear comfortable clothing that allows easy access to the sample collection site (e.g., arm for blood draw).',
      'Bring your test requisition form and identification.',
    ],
  },
];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  icon: LucideIcon;
  image: string;
  dataAiHint: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-blood-test-results',
    title: 'Understanding Your Blood Test Results',
    author: 'Dr. Eva Health',
    date: 'October 26, 2023',
    excerpt: 'A simple guide to making sense of common markers in your blood test report.',
    content: '<p>Blood tests are a common diagnostic tool, but the results can often seem like a foreign language. This guide will help you understand some of the key markers and what they might indicate. Remember, always discuss your results with your healthcare provider for a complete understanding.</p><h3>Key Markers:</h3><ul><li><strong>Complete Blood Count (CBC):</strong> Looks at red blood cells, white blood cells, and platelets.</li><li><strong>Lipid Panel:</strong> Measures cholesterol levels.</li><li><strong>Basic Metabolic Panel (BMP):</strong> Checks glucose, calcium, and electrolyte levels.</li></ul><p>Understanding these can empower you to take better care of your health.</p>',
    icon: Users,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'medical report',
    category: 'Lab Tests'
  },
  {
    id: '2',
    slug: 'importance-of-regular-checkups',
    title: 'The Importance of Regular Health Check-ups',
    author: 'Dr. Ben Wellness',
    date: 'November 05, 2023',
    excerpt: 'Discover why routine health screenings are crucial for preventative care and early detection.',
    content: '<p>Regular health check-ups are a cornerstone of preventative medicine. They allow for early detection of potential health issues, often before symptoms even appear. This can lead to more effective treatment and better long-term health outcomes.</p><h3>Benefits Include:</h3><ul><li>Early detection of diseases.</li><li>Monitoring of existing conditions.</li><li>Assessment of risk for future medical problems.</li><li>Encouragement for a healthy lifestyle.</li></ul><p>Schedule your annual check-up today!</p>',
    icon: Activity,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'doctor patient',
    category: 'Wellness'
  },
  {
    id: '3',
    slug: 'navigating-seasonal-allergies',
    title: 'Navigating Seasonal Allergies: Tips and Tests',
    author: 'Dr. Aller G. Clear',
    date: 'November 15, 2023',
    excerpt: 'Learn about common allergens, management strategies, and how lab tests can help identify triggers.',
    content: '<p>Seasonal allergies can significantly impact your quality of life. Understanding your triggers is the first step towards managing them effectively. Common symptoms include sneezing, runny nose, and itchy eyes.</p><h3>Management & Testing:</h3><ul><li><strong>Allergy Testing:</strong> Skin prick tests or blood tests (like IgE tests) can help identify specific allergens.</li><li><strong>Avoidance:</strong> Once triggers are known, minimizing exposure is key.</li><li><strong>Medications:</strong> Antihistamines, decongestants, and nasal corticosteroids can provide relief.</li></ul><p>Talk to an allergist if your symptoms are severe or persistent.</p>',
    icon: Leaf,
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'flowers nature',
    category: 'Allergies'
  },
];

export const SITE_NAME = "BIO GENIX DIAGNOSTICS";

export const LAB_CONTACT_INFO = {
  name: SITE_NAME,
  address: 'Trichy Road, Near by KP Medicals, Olampus, Ramasamy Nagar, Ramanathapuram, Coimbatore - 641 045',
  phone: '8838938530',
  whatsapp: '8870268530',
  email: 'labinfo@biogenix.in',
  facebookUsername: 'biogenix',
  instagramUsername: 'biogenix',
  hours: [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  mapPinIcon: MapPin,
  phoneIcon: Phone,
  emailIcon: Mail,
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.709390707077!2d-97.7430606848881!3d30.28099998177687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b58823581559%3A0x5ba1b04e4cf52658!2sTexas%20State%20Capitol!5e0!3m2!1sen!2sus!4v1620230000000!5m2!1sen!2sus',
  mapPlaceholderImage: 'https://placehold.co/800x400.png',
  mapPlaceholderAiHint: 'city map location',
};


// Aarogyam Health Packages Data
export type PackageKey = 'aPro' | 'bPro' | 'cPro' | 'maxPro';

export interface AarogyamParameter {
  name: string;
  isProfileGroup: boolean;
  isSubItem?: boolean;
  subItemsList?: string[];
  inclusions: Partial<Record<PackageKey, boolean>>;
}

export const AAROGYAM_PROFILE_DEFINITIONS: AarogyamParameter[] = [
  {
    name: "Lipid Profile (8)",
    isProfileGroup: true,
    subItemsList: ["LOL Cholesterol-Direct", "LOL/HDL Ratio", "VLDL cholesterol", "TC/HDL Cholesterol Ratio", "Non-HDL Cholesterol", "Total Cholesterol", "HDL Cholesterol-Direct", "Triglycerides"],
    inclusions: { aPro: true, bPro: true, cPro: true, maxPro: true }
  },
  {
    name: "Liver Profile (11)",
    isProfileGroup: true,
    subItemsList: ["Protein-Total", "Serum Albumin/Globulin Ratio", "Aspartate Aminotransferase (SGOT)", "Bilirubin (Indirect)", "Albumin-Serum", "Alkaline Phosphatase", "Bilirubin-Direct", "Alanine Transaminase (SGPT)", "Serum Globulin", "Bilirubin - Total"],
    inclusions: { aPro: false, bPro: true, cPro: true, maxPro: true }
  },
  {
    name: "Kidney Profile (5)",
    isProfileGroup: true,
    subItemsList: ["Calcium", "Uric Acid", "Creatinine - Serum"],
    inclusions: { aPro: true, bPro: true, cPro: true, maxPro: true }
  },
  {
    name: "Iron Deficiency Profile (3)",
    isProfileGroup: true,
    subItemsList: ["Total Iron Binding Capacity (TIBC)", "% Transferrin Saturation", "Iron"],
    inclusions: { aPro: false, bPro: false, cPro: true, maxPro: true }
  },
  {
    name: "Thyroid Profile (3)",
    isProfileGroup: true,
    subItemsList: ["Thyroid Stimulating Hormone (TSH)", "Total Thyroxine (T4)", "Total Triiodothyronine (T3)"],
    inclusions: { aPro: false, bPro: true, cPro: false, maxPro: true }
  },
  {
    name: "Serum Electrolytes (3)",
    isProfileGroup: true,
    subItemsList: ["Chloride", "Potassium", "Sodium"],
    inclusions: { aPro: false, bPro: false, cPro: true, maxPro: true }
  },
  { name: "Diabetes Profile (3)", isProfileGroup: true, subItemsList: ["HbA1c", "Fasting Sugar"], inclusions: {} },
  { name: "HbA1c", isProfileGroup: false, isSubItem: true, inclusions: { aPro: false, bPro: true, cPro: true, maxPro: true } },
  { name: "Fasting Sugar", isProfileGroup: false, isSubItem: true, inclusions: { aPro: false, bPro: true, cPro: true, maxPro: true } },
  { name: "Complete Hemogram (28)", isProfileGroup: true, inclusions: { aPro: true, bPro: true, cPro: true, maxPro: true } },
  { name: "Vitamin D Total", isProfileGroup: false, inclusions: { aPro: false, bPro: true, cPro: true, maxPro: true } },
  { name: "Vitamin B12", isProfileGroup: false, inclusions: { aPro: false, bPro: true, cPro: true, maxPro: true } },
  { name: "Complete Urine Analysis (26)", isProfileGroup: true, inclusions: { aPro: true, bPro: true, cPro: true, maxPro: true } },
];

export const AAROGYAM_PACKAGE_COLUMNS = [
  { key: 'aPro' as PackageKey, name: "Aarogyam A Pro" },
  { key: 'bPro' as PackageKey, name: "Aarogyam B Pro" },
  { key: 'cPro' as PackageKey, name: "Aarogyam C Pro" },
  { key: 'maxPro' as PackageKey, name: "Aarogyam Max Pro" }
];

    
    