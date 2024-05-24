module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: true,
        },
      },
    },
    "removeDimensions",
  ],
};
