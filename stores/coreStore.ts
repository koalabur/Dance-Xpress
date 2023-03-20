import { defineStore } from "pinia";

export const useCoreStore = defineStore("core", {
  state: () => ({
    showNav: false,
  }),
  actions: {
    setCloseNav() {
      this.showNav = false;
    },
    setOpenNav() {
      this.showNav = true;
    },
    setToggleNav() {
      this.showNav = !this.showNav;
    },
  },
  getters: {
    getShowNav(): boolean {
      return this.showNav;
    },
  },
});

//! Actions Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

//// Assign const
// const coreStore = useCoreStore();

//// coreStore.action
// coreStore.setCloseNav();

//! Getters Usage

//* Import pinia store (global state)
// import { useCoreStore } from "@/stores/coreStore";

//// Assign const
// const coreStore = useCoreStore();

//// coreStore.getter
// coreStore.getShowNav;
