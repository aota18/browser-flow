/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        console.log("REWRITES CALLED")
        return [
            {
                source: '/api/:path*',
                destination: 'http://54.186.82.183:8080/'
            }
        ]
    }
}

module.exports = nextConfig
