const bs = require("browser-sync").create();

bs.init({
  server: "./src",
  open: false,
  files: ["**/*.html", "**/*.css"],
});
