/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
        colors: {
            primary: "#4493f8",
            secondary: "#161B22"
        },
        backgroundColor: {
            primary: "#4493f8",
            test: "#388bfd1a"
        },
        borderColor: {
            primary: "#4493f8"
        }, 

        animation: { 
            slideLeft: "slideLeft ease-in-out .4s"
        }

    },
  },

  plugins: [],
}

