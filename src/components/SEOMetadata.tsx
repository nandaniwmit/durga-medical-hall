import React, { useEffect } from 'react';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  faqSchema?: { question: string; answer: string }[];
}

export const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  keywords = "Durga Medical Hall Gaya, chemist A P Colony Gaya, medicine store Asha Singh More, pharmacy Gaya Bihar, WhatsApp medicine order Gaya, genuine medicines Gaya",
  canonicalPath = "/",
  faqSchema
}) => {
  useEffect(() => {
    // Set Page Title
    document.title = `${title} | Durga Medical Hall, Gaya`;

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Set Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // LocalBusiness JSON-LD Schema Injection
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "Durga Medical Hall",
      "image": "https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80",
      "telephone": "+919430070043",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "QXQM+3W5 ASHA SINGH MORE, A P Colony",
        "addressLocality": "Gaya",
        "addressRegion": "Bihar",
        "postalCode": "823001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "24.7876",
        "longitude": "84.9950"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "07:00",
        "closes": "22:30"
      },
      "priceRange": "₹",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
      "currenciesAccepted": "INR"
    };

    let schemaScript = document.getElementById('json-ld-localbusiness');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'json-ld-localbusiness';
      schemaScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(localBusinessSchema);

    // FAQ Schema Injection if present
    if (faqSchema && faqSchema.length > 0) {
      const faqJson = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqSchema.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };

      let faqScript = document.getElementById('json-ld-faq');
      if (!faqScript) {
        faqScript = document.createElement('script');
        faqScript.id = 'json-ld-faq';
        faqScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(faqScript);
      }
      faqScript.textContent = JSON.stringify(faqJson);
    }
  }, [title, description, keywords, canonicalPath, faqSchema]);

  return null;
};
