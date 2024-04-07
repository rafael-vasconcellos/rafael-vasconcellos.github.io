/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
        textColor: {
            primary: "#4493f8"
        },
        backgroundColor: {
            primary: "#4493f8",
            test: "#388bfd1a"
        },
        borderColor: {
            primary: "#4493f8"
        }, 

        
    },
  },

  plugins: [],
}

