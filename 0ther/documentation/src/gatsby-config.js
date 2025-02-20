module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "OpenSchool Documentation",
  },
  plugins: [
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
