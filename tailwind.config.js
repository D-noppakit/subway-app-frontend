/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral50: '#ffffff'.toLowerCase(),
        neutral100: '#f8f9fb'.toLowerCase(),
        neutral200: '#edeff5'.toLowerCase(),
        neutral300: '#e8eaf1'.toLowerCase(),
        neutral400: '#dfe0e7'.toLowerCase(),
        neutral500: '#c3c4cd'.toLowerCase(),
        neutral600: '#a3a6b7'.toLowerCase(),
        neutral700: '#72747d'.toLowerCase(),
        neutral800: '#3f4047'.toLowerCase(),
        neutral900: '#2c2c30'.toLowerCase(),
        blue50: '#eff8ff'.toLowerCase(),
        blue100: '#b9ddff'.toLowerCase(),
        blue200: '#8cc4ff'.toLowerCase(),
        blue300: '#72aeff'.toLowerCase(),
        blue400: '#5699ff'.toLowerCase(),
        blue500: '#3684f3'.toLowerCase(),
        blue600: '#0169cd'.toLowerCase(),
        blue700: '#005dc5'.toLowerCase(),
        blue800: '#004baf'.toLowerCase(),
        blue900: '#003999'.toLowerCase(),
        orange50: '#fff4ea'.toLowerCase(),
        orange100: '#ffd6bd'.toLowerCase(),
        orange200: '#ff996a'.toLowerCase(),
        orange300: '#ff8356'.toLowerCase(),
        orange400: '#ff6d42'.toLowerCase(),
        orange500: '#e6572f'.toLowerCase(),
        orange600: '#cd401b'.toLowerCase(),
        orange700: '#b44405'.toLowerCase(),
        orange800: '#9b2500'.toLowerCase(),
        orange900: '#832f00'.toLowerCase(),
        red50: '#ffece8'.toLowerCase(),
        red100: '#ffcdc6'.toLowerCase(),
        red200: '#ff988e'.toLowerCase(),
        red300: '#ff8279'.toLowerCase(),
        red400: '#ff6059'.toLowerCase(),
        red500: '#ef4c49'.toLowerCase(),
        red600: '#cd3e3f'.toLowerCase(),
        red700: '#b4262d'.toLowerCase(),
        red800: '#9b001c'.toLowerCase(),
        red900: '#83000c'.toLowerCase(),
        yellowed50: '#ffffe7'.toLowerCase(),
        yellowed100: '#fffed7'.toLowerCase(),
        yellowed200: '#fff7a6'.toLowerCase(),
        yellowed300: '#ffeb76'.toLowerCase(),
        yellowed400: '#fad759'.toLowerCase(),
        yellowed500: '#e9af3d'.toLowerCase(),
        yellowed600: '#ca8828'.toLowerCase(),
        yellowed700: '#af6e26'.toLowerCase(),
        yellowed800: '#895118'.toLowerCase(),
        yellowed900: '#5f370e'.toLowerCase(),
        green50: '#e8ffee'.toLowerCase(),
        green100: '#cbffe0'.toLowerCase(),
        green200: '#85ebae'.toLowerCase(),
        green300: '#75d390'.toLowerCase(),
        green400: '#57bd7a'.toLowerCase(),
        green500: '#32a75a'.toLowerCase(),
        green600: '#00944d'.toLowerCase(),
        green700: '#006e39'.toLowerCase(),
        green800: '#005929'.toLowerCase(),
        green900: '#004618'.toLowerCase(),
      }, screens: {
        'iphone-se': { 'max': '375px' }, // iPhone SE (2nd generation), 6/7/8
        'h-very-small': { 'raw': '(min-height: 667px)' }, // iPhone SE
        'h-small': { 'raw': '(min-height: 740px)' }, // S8+
        'h-half-medium': { 'raw': '(min-height: 844px)' }, // iPhone 12 Pro
        'h-medium': { 'raw': '(min-height: 882px)' }, // Fold 5
        'h-tall': { 'raw': '(min-height: 896px)' }, // iPhone XR
        'h-very-tall': { 'raw': '(min-height: 915px)' }, // Pixel 7 || S20 Ultra || A51/71
        'h-tallest': { 'raw': '(min-height: 932px)' }, // iPhone 14 Pro Max
      }
    },
  },
  plugins: [],
};
