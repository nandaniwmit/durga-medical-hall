export interface GalleryItem {
  id: string;
  title: string;
  category: "Store Front" | "Shelves & Storage" | "Healthcare Devices" | "Baby & Personal Care" | "Prescription Counter";
  imageUrl: string;
  caption: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Durga Medical Hall Front Entrance",
    category: "Store Front",
    imageUrl: "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
    caption: "Clean, prominent facade located at Asha Singh More, A P Colony, Gaya."
  },
  {
    id: "gal-2",
    title: "Organized Prescription Medicine Shelves",
    category: "Shelves & Storage",
    imageUrl: "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80",
    caption: "Systematically categorized medicine racks for lightning-fast retrieval."
  },
  {
    id: "gal-3",
    title: "Digital Health Devices & Diagnostic Section",
    category: "Healthcare Devices",
    imageUrl: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80",
    caption: "Authorized sales counter for Omron, Accu-Chek & Dr. Morepen devices."
  },
  {
    id: "gal-4",
    title: "Cold Chain Refrigerated Vaccine & Insulin Storage",
    category: "Shelves & Storage",
    imageUrl: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80",
    caption: "24/7 power-backed medical cold storage maintaining 2°C - 8°C temperature."
  },
  {
    id: "gal-5",
    title: "Baby Care & Hygiene Essentials Counter",
    category: "Baby & Personal Care",
    imageUrl: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=1200&q=80",
    caption: "Premium baby lotions, diapers, wet wipes and mother care products."
  },
  {
    id: "gal-6",
    title: "Pharmacist Consultation Counter",
    category: "Prescription Counter",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80",
    caption: "Qualified pharmacist assisting customers with prescription dosage instructions."
  },
  {
    id: "gal-7",
    title: "Surgical Supplies & First Aid Essentials",
    category: "Shelves & Storage",
    imageUrl: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80",
    caption: "Sterile surgical dressings, gloves, masks, and orthopedic braces."
  },
  {
    id: "gal-8",
    title: "Wide Range of Daily Healthcare Products",
    category: "Baby & Personal Care",
    imageUrl: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    caption: "Nutritional supplements, skin care, oral hygiene & wellness items."
  }
];
