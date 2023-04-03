export default defineNuxtPlugin((nuxtApp) => {
  useSchemaOrg([
    defineOrganization({
      name: "Dance Xpress",
      logo: "/dxp-logo.png",
      sameAs: ["https://dancexpresslv.com"],
    }),
    defineWebPage(),
  ]);
});
