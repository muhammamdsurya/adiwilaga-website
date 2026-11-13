/* Structured data (JSON-LD) dibangun dari site.ts supaya selalu sama dengan isi halaman */
import { company, services, products, faq } from './site';

const SITE = 'https://www.adiwilagaagung.com/';
export const ORG_ID = SITE + '#organisasi';

export const organization = {
  '@context': 'https://schema.org',
  '@type': 'GeneralContractor',
  '@id': ORG_ID,
  name: company.name,
  description: 'Kontraktor umum dan pengadaan barang jasa di Bekasi sejak 2015: konstruksi dan renovasi, service mesin kantor dan bank, pemusnahan dokumen, percetakan, supplier material proyek, sewa mobil, serta instalasi CCTV dan jaringan IT.',
  url: SITE,
  logo: SITE + 'logo-192.png',
  image: SITE + 'og-image.jpg',
  telephone: '+62-878-8152-1871',
  email: company.email,
  foundingDate: String(company.founded),
  address: {
    '@type': 'PostalAddress', streetAddress: company.address.street, addressLocality: company.address.city,
    addressRegion: company.address.region, postalCode: company.address.postal, addressCountry: 'ID',
  },
  geo: { '@type': 'GeoCoordinates', latitude: company.geo.lat, longitude: company.geo.lng },
  hasMap: company.mapsUrl,
  areaServed: [{ '@type': 'City', name: 'Bekasi' }, { '@type': 'Country', name: 'Indonesia' }],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '09:00', closes: '17:00',
  },
  sameAs: company.social.map((s) => s.url),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `Layanan ${company.name}`,
    itemListElement: [
      ...services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: `${SITE}layanan/${s.slug}/` } })),
      ...products.map((p) => ({ '@type': 'Offer', itemOffered: { '@type': 'Product', name: p.name } })),
    ],
  },
};

export const website = {
  '@context': 'https://schema.org', '@type': 'WebSite', '@id': SITE + '#website',
  url: SITE, name: company.name, inLanguage: 'id-ID', publisher: { '@id': ORG_ID },
};

export const faqPage = (items: typeof faq) => ({
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumb = (items: [string, string][]) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + path.replace(/^\//, '') })),
});

export const serviceSchema = (s: (typeof services)[number]) => ({
  '@context': 'https://schema.org', '@type': 'Service',
  name: s.title, description: s.lead, url: `${SITE}layanan/${s.slug}/`,
  serviceType: s.short, provider: { '@id': ORG_ID }, areaServed: { '@type': 'City', name: 'Bekasi' },
});
