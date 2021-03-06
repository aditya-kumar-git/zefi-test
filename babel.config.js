module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            Screens: "./src/Screens",
            Components: "./src/Components",
            Redux: "./src/Redux",
            Images: "./src/Images",
          },
        },
      ],
    ],
  };
};
