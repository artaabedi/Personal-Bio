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
        destination: 'https://lrmn.is-a.dev/',
        permanent: true,
      },
      {
        source: '/virtualphotography',
        destination: 'https://vp.lrmn.fun/',
        permanent: true,
      },
      {
        source: '/mewstify',
        destination: 'https://mewstify.vercel.app/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://meww.me/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/romanroman.nya',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/lrmn7',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31urnjrljaimmmf52sealktmdz3i/',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/romanromannya',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/mewwme',
        permanent: true,
      },
      {
        source: '/madebytragic',
        destination: 'https://discord.gg/6EXgrmtkPX',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
