module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugins:['module:react-native-dotenv']
  };
};
