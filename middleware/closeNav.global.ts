import { useCoreStore } from "@/stores/coreStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const coreStore = useCoreStore();
  coreStore.setCloseNav();
});
