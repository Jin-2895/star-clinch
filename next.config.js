// @ts-check
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
 
/* eslint-disable @typescript-eslint/no-var-requires */
// module.exports = async (phase, { defaultConfig }) => {
module.exports = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // console.log(defaultConfig)
    return await {
      /* development only config options here */
      eslint: {
        dirs: ['.'],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'artistsimages.b-cdn.net',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'prod-platform-data.s3.ap-south-1.amazonaws.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'wpcdn.starclinch.in',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: "commondatastorage.googleapis.com",
            pathname: '**',
          }
        ],
      },
      // experimental: {
      //   serverActions: {
      //     allowedOrigins: ['starclinch.com'],
      //   },
      // },
    
      poweredByHeader: false,
      trailingSlash: true,
      basePath: '',
      // The starter code load resources from `public` folder with `router.basePath` in React components.
      // So, the source code is "basePath-ready".
      // You can remove `basePath` if you don't need it.
      reactStrictMode: true,
    }
  }
 
  return await {
    /* config options for all phases except development here */
    eslint: {
      dirs: ['.'],
    },
    // experimental: {
    //   serverActions: {
    //     allowedOrigins: ['starclinch.com'],
    //   },
    // },
  
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'artistsimages.b-cdn.net',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'prod-platform-data.s3.ap-south-1.amazonaws.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'wpcdn.starclinch.in',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: "commondatastorage.googleapis.com",
          pathname: '**',
        }
      ],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
  }
}
