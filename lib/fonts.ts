import { Playfair_Display, Inter, Jost } from "next/font/google";

// Current Active Fonts
export const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
});

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const jost = Jost({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jost",
});

// Alternative Font Options (uncomment to use)
// export const lora = Lora({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-lora",
// });

// export const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-cormorant",
//   weight: ["300", "400", "500", "600", "700"],
// });

// export const crimson = Crimson_Text({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-crimson",
//   weight: ["400", "600", "700"],
// });

// Font Configuration Object
export const fontConfig = {
    primary: playfair,
    secondary: jost,
    heading: playfair,
    body: jost,
    display: playfair,
};

// CSS Variable Names
export const fontVariables = {
    primary: "--font-playfair",
    secondary: "--font-jost", 
    heading: "--font-playfair",
    body: "--font-jost",
    display: "--font-playfair",
};

// To change fonts system-wide:
// 1. Import your desired font above
// 2. Update the fontConfig object
// 3. Update the fontVariables object
// 4. Update the CSS variables in globals.css if needed

export default fontConfig;
