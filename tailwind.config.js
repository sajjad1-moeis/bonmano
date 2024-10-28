const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "8px",
         },
      },
      screens: {
         sm: "640px",
         // => @media (min-width: 640px) { ... }

         md: "799px",
         // => @media (min-width: 768px) { ... }

         lg: "1024px",
         // => @media (min-width: 1024px) { ... }

         xl: "1300px",
         // => @media (min-width: 1280px) { ... }
         // xxl: "1400px",
      },
      extend: {
         colors: {
            success: "#00d084",
            successDark: "#009979",
            danger: "#e3150f",
            brown: "#C19277",
            grayAdmin: "#21222D",
            "gray-1000": "#171821",
         },
      },
   },
   plugins: [],
});
