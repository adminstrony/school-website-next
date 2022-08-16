/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com'],
  },
  async redirects() {
    return [
      {
        source: '/plan_lekcji',
        destination: 'https://plan-lekcji.zs2lancut.pl',
        permanent: true,
      },
      {
        source: '/dziennik',
        destination: 'https://uonetplus.vulcan.net.pl/powiatlancucki/',
        permanent: true,
      },
      {
        source: '/nabor',
        destination: 'https://nabor.pcss.pl/lancut',
        permanent: true,
      },
      {
        source: '/index.php/stowarzyszenie/aktualnosci',
        destination: 'aktualnosci',
        permanent: true,
      },
    ]
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
