/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./app/**/*.{js,jsx}",
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        fontFamily: {
            primary: ["var(--font-dmSans)", "sans-serif"],
            secondary: ["var(--font-barlow)", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#000000",
                secondary: "#666666",
                accent: "#ffca3b",
                border: "#d7d7d7",
            },
            // colors: {
            //     primary: "#2E4A9E",   // brand blue (main identity)
            //     secondary: "#333333", // body text
            //     accent: "#F4B400",    // brand yellow highlight
            //     border: "#E2E5EA",    // subtle UI borders
            // },
            boxShadow: {
                custom: "0 4px 54px 10px rgba(18,12,21,0.06)",
            },
            backgroundImage: {
                hero: "url('/assets/img/hero/bg.jpg')",
            },
        },
    },
    plugins: [],
}
