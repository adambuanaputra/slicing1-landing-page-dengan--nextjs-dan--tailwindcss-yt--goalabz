module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins', sans-serif"],
        serif: ["'Volkhov', serif"],
      },
      colors: {
        'accent-1': '#F1A501',
        'accent-2': '#DF6951',
        'accent-3': '#D5AEE4',
        'accent-4': '#FFF1DA',
        'accent-5': '#ff7152',
        'accent-6': '#6246e5',
        'accent-7': '#59B1E6',
      },
      boxShadow: {
        great:
          '0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);',
      },
    },
  },
  plugins: [],
};
