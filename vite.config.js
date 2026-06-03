import { resolve } from "node:path";
import { defineConfig } from "vite";

const pages = [
  "index",
  "about",
  "treatments",
  "doctors",
  "hospitals",
  "medical-tourism",
  "international-patients",
  "patient-stories",
  "blog",
  "contact"
];

export default defineConfig({
  base: "./",
  appType: "mpa",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(__dirname, `${page}.html`)])
      )
    }
  }
});
