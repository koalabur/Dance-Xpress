export default [
  { UserAgent: "*" },
  { Disallow: "/" },
  { BlankLine: true },
  { Comment: "" },

  {
    Sitemap: (req: { headers: { host: any } }) =>
      `https://${req.headers.host}/sitemap.xml`,
  },
];
