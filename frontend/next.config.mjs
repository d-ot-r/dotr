/** @type {import('next').NextConfig} */

export const nextConfig = {
    images: {
        domains: ["assets.aceternity.com", 'images.unsplash.com'], // Add Unsplash domain
    },
    reactStrictMode: true,
    swcMinify: true,
};