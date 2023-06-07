/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["spu-strapi.apptr1.com"],
  },

  env: {
    STRAPI_API_BASE_URL: "https://spu-strapi.apptr1.com",
    STRAPI_API_KEY:
      "e37c98b9fb186bbc984fe5efb5de5fca8ca98e6123f8f1c8ec9380216cc3b46af2419c0503cc1ec0ef846e970bae0d412ebf8d58d0644aa8d35f8c34ecc570f7960c10361298c36c4ecc7c266db2a34a8effeadf7aed445369afac5b3c77bbc798e6ea7cf09080ea2a495e2b477795a003972e1af584b11ecb8e7f345fbbcf3a",
  },
};

module.exports = nextConfig;
