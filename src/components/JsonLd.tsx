export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": "True Home Capital",
        "description": "We buy houses in Dallas, TX. Get a fair cash offer for your home in any condition.",
        "url": "https://truehomecapital.com",
        "telephone": "+15551234567",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Real Estate Blvd, Suite 100",
            "addressLocality": "Dallas",
            "addressRegion": "TX",
            "postalCode": "75201",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 32.7767,
            "longitude": -96.7970
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
        },
        "sameAs": [
            "https://www.facebook.com/truehomecapital",
            "https://twitter.com/truehomecapital",
            "https://www.instagram.com/truehomecapital"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
