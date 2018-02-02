/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["config"] }] */

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/feed': { page: '/feed' }
  }),

  webpack: config => {
    config.module.rules.push(
      {
        test: /\.css/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader']
      }
    );
    // config.resolve.alias = {
    //   react: 'preact-compat/dist/preact-compat',
    //   'react-dom': 'preact-compat/dist/preact-compat'
    // };
    return config;
  }
};
