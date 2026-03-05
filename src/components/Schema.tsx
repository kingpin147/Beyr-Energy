export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Beyond Rental of Alternative Energy Equipment LLC",
    "alternateName": "BEYR Energy",
    "url": "https://beyrenergy.com",
    "logo": "https://beyrenergy.com/logo.png",
    "description": "BEYR Energy is a Dubai-based company focused on rental of alternative energy equipment including BESS, Solar Hybrid, and Temporary Power Solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971-50-000-0000",
      "contactType": "customer service",
      "email": "info@beyrenergy.com",
      "availableLanguage": ["en", "ar"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/beyrenergy",
      "https://www.instagram.com/beyrenergy"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
