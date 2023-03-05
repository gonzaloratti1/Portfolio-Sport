module.exports = {
  module: {
    rules: [
      {
        test: /\.pdf$/i,
        use: 'file-loader',
      },
    ],
  },
};