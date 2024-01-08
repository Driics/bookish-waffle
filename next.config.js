/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [{loader: "@svgr/webpack", options: {icon: true}}]

        });
        return config;
    }
}

module.exports = nextConfig