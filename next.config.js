const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://artaabedi.com/',
        permanent: true,
      },
      {
        source: '/virtualphotography',
        destination: 'https://artaabedi.com/',
        permanent: true,
      },
      {
        source: '/mewstify',
        destination: 'https://artaabedi.com/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://artaabedi.com/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/rtaafj',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/artaabedi',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/USER/pbht2yt12y811c4iyoa9m1zfa?si=s00cXukWR1CHYVYAcBB8UA',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/romanromannya',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/artaabedi',
        permanent: true,
      },
      {
        source: '/madebytragic',
        destination: 'https://discord.com/invite/ZS27HA3A3R',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
