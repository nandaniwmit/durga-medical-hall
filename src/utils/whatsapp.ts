export interface WhatsAppOrderDetails {
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  medicineRequired: string;
  hasPrescription: boolean;
  message?: string;
  preferredTime?: string;
}

export const PHONE_NUMBER = "09430070043";
export const RAW_WHATSAPP_NUMBER = "919430070043";

export function generateWhatsAppOrderUrl(details: WhatsAppOrderDetails): string {
  const text = `Hello Durga Medical Hall,
I would like to place a Medicine Order:

*Customer Name:* ${details.customerName}
*Phone:* ${details.phone}
${details.email ? `*Email:* ${details.email}\n` : ''}*Medicine Required:* ${details.medicineRequired}
*Delivery Address:* ${details.address}
*Prescription Attached:* ${details.hasPrescription ? 'Yes (Will send photo in chat)' : 'No / OTC'}
*Preferred Delivery Time:* ${details.preferredTime || 'As soon as possible'}
${details.message ? `*Notes / Message:* ${details.message}\n` : ''}
Thank you!`;

  return `https://wa.me/${RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function generateQuickWhatsAppUrl(customMessage?: string): string {
  const text = customMessage || "Hello Durga Medical Hall, I have a query regarding medicine availability and home delivery in Gaya.";
  return `https://wa.me/${RAW_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
