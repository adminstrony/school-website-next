module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  async redirects() {
    return [
      {
        source: '/plan_lekcji',
        destination: 'https://plan-lekcji.zs2lancut.pl',
        permanent: true,
      },
      {
        source: '/nabor',
        destination: 'https://nabor.pcss.pl/lancut',
        permanent: true,
      },
    ]
  },
}
