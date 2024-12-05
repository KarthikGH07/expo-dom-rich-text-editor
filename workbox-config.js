module.exports = {
  globDirectory: "dist/",
  globPatterns: ["**/*.{js,html,ico,png,json,css}"],
  swDest: "dist/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
};
