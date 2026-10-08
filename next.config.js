const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  async headers() {
    return [
      {
        source: "/downloads/:path*",
        headers: [
          {
            key: "Content-Disposition",
            value: 'attachment; filename="Lista-de-Materiais-Basicos-Grazyela-Couto.pdf"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
