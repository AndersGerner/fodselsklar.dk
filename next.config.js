const SITE = require('./src/config.js').SITE;
const routeGroups = require('./route-groups.json');

/** @type {import('next').NextConfig} */
module.exports = {
  routeGroups,
  reactStrictMode: true,

  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'mentalro.nu',
      },
    ],
  },
};
