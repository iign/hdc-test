let mix = require("laravel-mix");
let path = require("path");

mix.setResourceRoot("../");
mix.setPublicPath(path.resolve("./"));
mix.disableNotifications();

mix.webpackConfig({
  watchOptions: {
    ignored: [
      path.posix.resolve(__dirname, "./node_modules"),
      path.posix.resolve(__dirname, "./css"),
      path.posix.resolve(__dirname, "./js"),
    ],
  },
});

mix.js("resources/js/app.js", "js");

mix.postCss("resources/css/app.css", "css");

mix.postCss("resources/css/editor-style.css", "css");

mix.browserSync({
  proxy: "http://rkw.local",
  host: "rkw.local",
  open: "external",
  port: 5000,
  injectChanges: true,
});

if (mix.inProduction()) {
  mix.version();
} else {
  mix.options({ manifest: false });
}
