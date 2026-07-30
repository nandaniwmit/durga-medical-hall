export interface HealthTip {
  id: string;
  title: string;
  summary: string;
  category: "Medicine Safety" | "Seasonal Care" | "Wellness";
  readTime: string;
  date: string;
  icon: string;
}

export const healthTips: HealthTip[] = [
  {
    id: "tip-1",
    title: "How to Properly Store Antibiotics & Temperature-Sensitive Medicines",
    summary: "Always check medicine packaging for temperature requirements. Insulins and liquid suspensions often require 2°C - 8°C refrigeration.",
    category: "Medicine Safety",
    readTime: "3 min read",
    date: "July 2026",
    icon: "Thermometer"
  },
  {
    id: "tip-2",
    title: "Understanding Generic vs Brand Name Medicines",
    summary: "Generic drugs contain the exact active chemical ingredient in identical strength and dosage as brand-name drugs at more affordable prices.",
    category: "Wellness",
    readTime: "4 min read",
    date: "July 2026",
    icon: "ShieldCheck"
  },
  {
    id: "tip-3",
    title: "Essential Home First-Aid Kit Checklist for Every Gaya Family",
    summary: "Ensure your home kit includes sterile bandages, antiseptic liquid, digital thermometer, pain relievers, ORS sachets, and burn ointment.",
    category: "Seasonal Care",
    readTime: "5 min read",
    date: "July 2026",
    icon: "Cross"
  }
];
