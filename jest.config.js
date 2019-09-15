module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  globals: {
    "ts-jest": {
      tsConfig: {
        lib: ["es2018", "dom"],
        allowJs: true,
      },
    },
  },
};
