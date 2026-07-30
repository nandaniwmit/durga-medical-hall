export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Orders & Delivery" | "Medicines & Authenticity" | "Payment & Store";
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "How can I order medicines via WhatsApp from Durga Medical Hall?",
    answer: "Ordering is simple! Click the 'WhatsApp Order' button on our website, fill in your details and medicine names (or attach a photo of your prescription), and hit send. Our pharmacist will quickly verify availability, total amount, and arrange home delivery in Gaya.",
    category: "Orders & Delivery"
  },
  {
    id: "faq-2",
    question: "Are all medicines sold at Durga Medical Hall 100% genuine?",
    answer: "Yes, absolutely! We source all medicines, health supplements, and medical devices directly from licensed pharmaceutical distributors and authorized manufacturer stockists. We never compromise on product authenticity or quality.",
    category: "Medicines & Authenticity"
  },
  {
    id: "faq-3",
    question: "Where is Durga Medical Hall located in Gaya, Bihar?",
    answer: "We are conveniently located at QXQM+3W5 ASHA SINGH MORE, A P Colony, Gaya, Bihar 823001. You can easily find us near Asha Singh More in A P Colony.",
    category: "Payment & Store"
  },
  {
    id: "faq-4",
    question: "What are the store working hours of Durga Medical Hall?",
    answer: "Our medical store is open 7 days a week from 7:00 AM to 10:30 PM. We also offer emergency medicine assistance via phone call at 09430070043.",
    category: "Payment & Store"
  },
  {
    id: "faq-5",
    question: "Is a doctor's prescription mandatory for buying prescription medicines?",
    answer: "Yes. In compliance with Indian pharmaceutical regulations, Schedule H and Schedule H1 prescription drugs require a valid prescription from a registered medical practitioner.",
    category: "Medicines & Authenticity"
  },
  {
    id: "faq-6",
    question: "Do you offer home delivery of medicines in A P Colony and nearby areas of Gaya?",
    answer: "Yes, we provide prompt local medicine home delivery across A P Colony, Rampur, Chandauti, Swaraj Puri Road, and surrounding neighborhoods of Gaya.",
    category: "Orders & Delivery"
  },
  {
    id: "faq-7",
    question: "What payment modes are accepted at Durga Medical Hall?",
    answer: "We accept Cash, UPI (Google Pay, PhonePe, Paytm, BHIM), Debit & Credit Cards, and Net Banking for both store purchases and home delivery orders.",
    category: "Payment & Store"
  }
];
