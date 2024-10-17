/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  //todo remove this for prod
  // productionBrowserSourceMaps: true,
  // TODO export is only for static export
  // output: 'export', 
  output: 'standalone',
  // distDir: 'build',
  // reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },
  webpack(config, { isServer, dev }) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    console.log('Resolved alias:', config.resolve.alias);
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
    console.log('Resolved alias2:', config.resolve.alias);
    return config;
  },
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/bot/scout',
      //   permanent: true,
      // },
      // {
      //   source: '/bot',
      //   destination: '/bot/nvbot',
      //   permanent: true,
      // }
    ]
  },
};

module.exports = nextConfig;
