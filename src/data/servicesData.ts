export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  itemCount: string;
  popularItems: string[];
}

export const servicesData: ServiceCategory[] = [
  {
    id: "prescription",
    title: "Prescription Medicines",
    shortDesc: "100% genuine prescription drugs verified by qualified pharmacists.",
    fullDesc: "We stock a comprehensive range of authentic ethical prescription drugs from trusted pharmaceutical brands like Cipla, Sun Pharma, Mankind, Abbott, Alkem, and Dr. Reddy's. All temperature-sensitive medications are stored under strict cold chain conditions.",
    iconName: "Pill",
    itemCount: "5000+ Stocked",
    popularItems: ["Antibiotics & Anti-infectives", "Cardiac & BP Medications", "Diabetic Care Medicines", "Gastrointestinal & Acid Relief", "Asthma & Inhalers"]
  },
  {
    id: "otc",
    title: "OTC Medicines & First Aid",
    shortDesc: "Over-the-counter essentials, pain relievers, fever & cold remedies.",
    fullDesc: "Instant access to reliable over-the-counter medicines for common ailments like fever, headache, body pain, cough, cold, acidity, digestion problems, and topical pain gels along with complete first-aid kits.",
    iconName: "Stethoscope",
    itemCount: "1200+ Essentials",
    popularItems: ["Pain Relief Gels & Sprays", "Cough & Cold Syrups", "Acidity & Antacids", "Antiseptics & Wound Dressings", "ORS & Electrolytes"]
  },
  {
    id: "devices",
    title: "Health Monitors & Devices",
    shortDesc: "Digital BP monitors, glucometers, nebulizers & thermometers.",
    fullDesc: "Monitors and healthcare appliances from certified diagnostic brands like Omron, Accu-Chek, Dr. Morepen, and Dr. Trust to empower home health tracking for seniors and families.",
    iconName: "Activity",
    itemCount: "50+ Devices",
    popularItems: ["Automatic BP Monitors", "Glucometers & Test Strips", "Pulse Oximeters", "Compressor Nebulizers", "Infrared Thermometers"]
  },
  {
    id: "surgical",
    title: "Surgical & Hospital Equipment",
    shortDesc: "Sterile surgical supplies, bandages, catheters, masks & gloves.",
    fullDesc: "High-grade hospital supplies, surgical dressings, catheters, IV sets, orthopedic support bands, wheel chairs, adult diapers, and clinical grade protective equipment for home nursing.",
    iconName: "ShieldAlert",
    itemCount: "300+ Medical Supplies",
    popularItems: ["Surgical Gloves & N95 Masks", "Crepe Bandages & Gauze Rolls", "Adult Diapers & Underpads", "Orthopedic Knee & Back Support", "Urine Bags & Catheters"]
  },
  {
    id: "babycare",
    title: "Baby Care & Mother Essentials",
    shortDesc: "Gentle baby skincare, formula milk, diapers, and mother wellness.",
    fullDesc: "Carefully curated hypoallergenic baby products, baby food, infant formula, diapers, baby wipes, rash creams, and maternal nutrition supplements for new mothers.",
    iconName: "Baby",
    itemCount: "450+ Products",
    popularItems: ["Sebamed & Himalaya Baby Care", "Pampers & Huggies Diapers", "Infant Nutrition & Cereals", "Maternity Protein Supplements", "Feeding Bottles & Sterilizers"]
  },
  {
    id: "supplements",
    title: "Supplements & Immunity Boosters",
    shortDesc: "Vitamins, minerals, protein powders, and herbal supplements.",
    fullDesc: "Boost your daily vital health with certified vitamin supplements, immunity enhancers, calcium & bone support, fish oil, protein powders, and natural herbal formulations.",
    iconName: "Sparkles",
    itemCount: "600+ Products",
    popularItems: ["Multivitamins & Zinc", "Calcium & Vitamin D3", "Omega-3 Fish Oil", "Protein Powders & Whey", "Ayurvedic Immunity Boosters"]
  }
];
