export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute();
  useHead(() => ({
    link: [
      {
        rel: "canonical",
        href: "https://dancexpresslv.com" + route.path,
      },
    ],
  }));
});
