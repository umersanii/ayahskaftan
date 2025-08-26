import { Playfair_Display, Inter } from "next/font/google";
import localFont from "next/font/local";

// Current Active Fonts - Safari Optimized
export const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-playfair",
    fallback: ["serif", "Times New Roman", "Times"],
    preload: true,
});

export const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
    fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
    preload: true,
});

// Local Jost Font Configuration - Safari Optimized
export const jost = localFont({
    src: [
        {
            path: "../public/fonts/Jost-Thin.ttf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-ExtraLight.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-Light.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../public/fonts/Jost-Black.ttf",
            weight: "900",
            style: "normal",
        },
        // Italic variants
        {
            path: "../public/fonts/Jost-LightItalic.ttf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../public/fonts/Jost-Italic.ttf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../public/fonts/Jost-MediumItalic.ttf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../public/fonts/Jost-SemiBoldItalic.ttf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../public/fonts/Jost-BoldItalic.ttf",
            weight: "700",
            style: "italic",
        },
    ],
    variable: "--font-jost",
    display: "swap",
    fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
    preload: true,
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

// Font Configuration Object - Updated to use Jost for everything
export const fontConfig = {
    primary: jost,
    secondary: jost,
    heading: jost,
    body: jost,
    display: jost,
};

// CSS Variable Names - Updated to use Jost variables
export const fontVariables = {
    primary: "--font-jost",
    secondary: "--font-jost", 
    heading: "--font-jost",
    body: "--font-jost",
    display: "--font-jost",
};

// To change fonts system-wide:
// 1. Import your desired font above
// 2. Update the fontConfig object
// 3. Update the fontVariables object
// 4. Update the CSS variables in globals.css if needed

export default fontConfig;
