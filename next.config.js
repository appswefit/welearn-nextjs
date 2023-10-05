const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  redirects() {
    return [
      {
        source: "/",
        destination: "/community",
        permanent: false,
      },
    ];
  }
}

module.exports = nextConfig
