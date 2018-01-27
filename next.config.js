module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/category': { page: '/category' },
    '/pdp': { page: '/pdp' }
  }),
  webpack: (config, { dev }) => {
    if (dev) {
      return config;
    }
    config.resolve.alias = {
      react: 'preact-compat/dist/preact-compat',
      'react-dom': 'preact-compat/dist/preact-compat'
    };
    return config;
  }
};
