/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#fff",
        "black": "000",
        "gray": {
          "25": "#FCFCFD",
          "50": "#F9FAFB",
          "100": "#F2F4F7",
          "200": "#EAECF0",
          "300": "#D0D5DD",
          "400": "#98A2B3",
          "500": "#667085",
          "600": "#475467",
          "700": "#344054",
          "800": "#1D2939",
          "900": "#101828"
        },
        "primary": {
          "400": "#150E28"
        },
        "error": {
          "25": "#FFFBFA",
          "50": "#FEF3F2",
          "100": "#FEE4E2",
          "200": "#FECDCA",
          "300": "#FDA29B",
          "400": "#F97066",
          "500": "#F04438",
          "600": "#D92D20",
          "700": "#B42318",
          "800": "#912018",
          "900": "#7A271A"
        },
        "warning": {
          "25": "#FFFCF5",
          "50": "#FFFAEB",
          "100": "#FEF0C7",
          "200": "#FEDF89",
          "300": "#FEC84B",
          "400": "#FDB022",
          "500": "#F79009",
          "600": "#DC6803",
          "700": "#B54708",
          "800": "#93370D",
          "900": "#7A2E0E"
        },
        "success": {
          "25": "#F6FEF9",
          "50": "#ECFDF3",
          "100": "#D1FADF",
          "200": "#A6F4C5",
          "300": "#6CE9A6",
          "400": "#32D583",
          "500": "#12B76A",
          "600": "#039855",
          "700": "#027A48",
          "800": "#05603A",
          "900": "#054F31"
        },
        "blue-gray": {
          "25": "#FCFCFD",
          "50": "#F8F9FC",
          "100": "#EAECF5",
          "200": "#D5D9EB",
          "300": "#AFB5D9",
          "400": "#717BBC",
          "500": "#4E5BA6",
          "600": "#3E4784",
          "700": "#363F72",
          "800": "#293056",
          "900": "#101323"
        },
        "blue-light": {
          "25": "#F5FBFF",
          "50": "#F0F9FF",
          "100": "#E0F2FE",
          "200": "#B9E6FE",
          "300": "#7CD4FD",
          "400": "#36BFFA",
          "500": "#0BA5EC",
          "600": "#0086C9",
          "700": "#026AA2",
          "800": "#065986",
          "900": "#0B4A6F"
        },
        "blue": {
          "25": "#F5FAFF",
          "50": "#EFF8FF",
          "100": "#D1E9FF",
          "200": "#B2DDFF",
          "300": "#84CAFF",
          "400": "#53B1FD",
          "500": "#2E90FA",
          "600": "#1570EF",
          "700": "#175CD3",
          "800": "#1849A9",
          "900": "#194185"
        },
        "indigo": {
          "25": "#F5F8FF",
          "50": "#EEF4FF",
          "100": "#E0EAFF",
          "200": "#C7D7FE",
          "300": "#A4BCFD",
          "400": "#8098F9",
          "500": "#6172F3",
          "600": "#444CE7",
          "700": "#3538CD",
          "800": "#2D31A6",
          "900": "#2D3282"
        },
        "purple": {
          "25": "#FAFAFF",
          "50": "#F4F3FF",
          "100": "#EBE9FE",
          "200": "#D9D6FE",
          "300": "#BDB4FE",
          "400": "#9B8AFB",
          "500": "#7A5AF8",
          "600": "#6938EF",
          "700": "#5925DC",
          "800": "#4A1FB8",
          "900": "#3E1C96"
        },
        "pink": {
          "25": "#FEF6FB",
          "50": "#FDF2FA",
          "100": "#FCE7F6",
          "200": "#FCCEEE",
          "300": "#FAA7E0",
          "400": "#F670C7",
          "500": "#EE46BC",
          "600": "#DD2590",
          "700": "#C11574",
          "800": "#9E165F",
          "900": "#851651"
        },
        "rosé": {
          "25": "#FFF5F6",
          "50": "#FFF1F3",
          "100": "#FFE4E8",
          "200": "#FECDD6",
          "300": "#FEA3B4",
          "400": "#FD6F8E",
          "500": "#F63D68",
          "600": "#E31B54",
          "700": "#C01048",
          "800": "#A11043",
          "900": "#89123E"
        },
        "orange": {
          "25": "#FFFAF5",
          "50": "#FFF6ED",
          "100": "#FFEAD5",
          "200": "#FDDCAB",
          "300": "#FEB273",
          "400": "#FD853A",
          "500": "#FB6514",
          "600": "#EC4A0A",
          "700": "#C4320A",
          "800": "#9C2A10",
          "900": "#7E2410"
        }
      },
      fontSize: {
        sm: '0.75rem',    // Small font size 12px
        xsm: '0.875rem',     // small font for md screen upward
        base: '1rem',     // Base font size 16px
        md: '1.125rem',   // medium font size 18px 
        lg: '1.25rem',    // large font size 20px
        xl: '1.875rem',   // X large font size 30px 
        '2xl': '2.25rem',    // XX large font size 36px
        '3xl': '3rem',    // XX large font size 48px
        '4xl': '3.75rem'  // XXXX large font size 60px
        // Add more font sizes as needed
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      fontWeight: {
        "100": 100,
        "200": 200,
        "300": 300,
        "400": 400,
        "500": 500,
        "600": 600,
        "700": 700,
        "800": 800,
        "900": 900
      },
      screens: {
        'sm': '640px',
        'tablet': '768px',
        'ipad': '1024px',
        'desktop': '1280px',
        '2xl': '1440px',
      },
      fontFamily: {
        'montserrat': 'Montserrat',
        'clash': 'Clash Display',
        'unica': 'Unica One'
      },
      width: {
        'width-px': 'calc(100% - 1rem)',
        'width-1px': 'calc(100% - 0.5rem)'
      },
      height:{
        'hero': "calc(100vh - 97px)",
        'smhero': "calc(100vh - 84px)",
        'aspect-rat': "calc(100% - 84px)"
      },
      maxHeight: {
        'hero': "calc(100vh - 97px)",
      },
      minHeight: {
        'textarea': 'calc(100vh - 97px - 12rem - 64px - 32px - 45px - 45px - 48px)'
      },
      gridTemplateColumns: {
        'part-col': "1fr 3px 1fr 3px 1fr"
      },
      gridTemplateRows: {
        'part-row': "1fr 3px 1fr"
      }
    },
  },
  plugins: [],
}