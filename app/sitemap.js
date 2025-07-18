// app/sitemap.js

export default function sitemap() {
  return [
    {
      url: 'https://www.vnr.co.za',
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.vnr.co.za/services',
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.vnr.co.za/team',
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.vnr.co.za/insights',
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.vnr.co.za/contact',
      lastModified: new Date('2025-07-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}