// next.config.js
module.exports = {
    images: {
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