const { POSTCSS_MODES } = require("@craco/craco");

module.exports = {
  style: {
    postcss: {
      mode: POSTCSS_MODES.extend,
      plugins: [
        require("tailwindcss"),
        require("autoprefixer"),
        // add the custom prefix to all Tailwind CSS classes
        require("postcss-prefix-selector")({
          prefix: ".tw ",
          exclude: [".bootstrap", /^.tw.*/],
        }),
      ],
    },
  },
};
