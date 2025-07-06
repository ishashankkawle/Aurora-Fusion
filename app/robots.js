export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: '<Sitemap of Website>', // Example : 'https://technote.in/sitemap.xml' 
    }
  }