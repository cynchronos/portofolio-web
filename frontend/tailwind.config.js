/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  safelist: [
    'hover:bg-[#25d366]',
    'hover:bg-[#c71610]',
    'hover:bg-[#FFFFFF]',
    'hover:bg-[#0077B5]',
    'hover:bg-[#000000]',
    'border-[#25d366]',
    'border-[#c71610]',
    'border-[#FFFFFF]',
    'border-[#0077B5]',
    'border-[#000000]'
  ]
};
