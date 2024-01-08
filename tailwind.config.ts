import type {Config} from 'tailwindcss'


import plugin from 'tailwindcss/plugin'

import {nextui} from "@nextui-org/theme";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // NextUI
        "./node_modules/@nextui-org/theme/dist/components/tabs.js",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'transparent': 'transparent',
            current: 'currentColor',
            'primary': '#48F955',
            'default': '#FFF',
            'body': '#050509',
            'card': '#1a1a20',
            'secondary': '#bfbfcb',
            'gray-dark': '#2F2F36',
            'gray-default': '#3a3a42',
            'green': '#48f955',
            'brand': '#48f955',
            'control': 'hsl(0deg 0% 20.4%)'
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-proxima)", "Helvetica", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
            },
            zIndex: {
                '100': '100',
            },
            screens: {
                'sm-max': {'max': '639.98px'},
                'sm-large': {'min': '639.98px', 'max': '1024px'},
                '2sm-max': {'max': '769px'},
                'md-max': {'max': '1024px'},
                'lg-max': {'max': '1320px'},
            },
            boxShadow: {
                'cpu': '0 2px 4px rgba(0,0,0,.1), 0 6px 4px -2px rgba(0,0,0,.15), inset 0 -3px 1px -1px rgba(0,0,0,.25)',
            },
            backgroundImage: {
                'gradient-cpu': 'linear-gradient(180deg, #232323, #222), linear-gradient(180deg, hsla(0,0%,100%,.05), hsla(0,0%,100%,.05) 26.56%, rgba(0,0,0,.05) 51.56%, rgba(0,0,0,.05))',
            },
            maxWidth: {
                'screen-xl': '1320px',
                'screen-3xl': '1752px',
            }
        },
    },
    plugins: [
        nextui({
            prefix: "nextui", // prefix for themes variables
            addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
            defaultTheme: "dark", // default theme from the themes object
            themes: {
                dark: {
                    colors: {
                        default: {
                            DEFAULT: "#fff",
                            foreground: "#000"
                        },
                        primary: {
                            DEFAULT: "#48f955",
                            foreground: "#000000",
                        },
                        secondary: {
                            DEFAULT: "#bfbfcb"
                        }
                    }
                }
            }
        }),
    ],
}
export default config
