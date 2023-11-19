/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "rahman.storage.iran.liara.space",
            },
        ],
    },
};

module.exports = nextConfig;
