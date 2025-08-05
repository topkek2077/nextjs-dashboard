import type { NextConfig } from 'next';
const path = require('path')

const nextConfig: NextConfig = {
    experimental: {
        ppr: 'incremental'
    },
    turbopack: {
        root: path.join(__dirname, '..'),
    },
};

export default nextConfig;
