import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    serverExternalPackages: ["mongoose", "@typegoose/typegoose"],
    images: {
        remotePatterns: [{ protocol: "https", hostname: "utfs.io" }],
    },
};

export default nextConfig;
