/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        console.log("REWRITES CALLED")
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/'
            }
        ]
    }
}

module.exports = nextConfig
