module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          "@components": "./src/components",
          "@screens": "./src/screens",
          "@utils": "./src/utils",
          "@hooks": "./src/hooks",
          "@assets": "./src/assets",
          "@context": "./src/context",
          "@navigation": "./src/navigation",
          "@api": "./src/api",
          "@styles": "./src/styles",
          "@types": "./src/types",
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    ]
  ],
};
