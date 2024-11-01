// next.config.js
module.exports = {
    images: {
      domains: ['lh3.googleusercontent.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dummyimage.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };