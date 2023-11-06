/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',

            }
        ]
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.join(__dirname, 'public');
        return config;
    },
}

module.exports = nextConfig
