module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-react-app"],
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]],
  };
};
