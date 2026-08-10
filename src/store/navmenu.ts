import { defineStore } from "pinia";

export const navmenu = defineStore("nav", () => {
  const menu = [
    { name: "Beranda", navto: "/" },
    { name: "Products", navto: "/products" },
    { name: "About", navto: "/about" },
    { name: "FAQ", navto: "/faq" },
    { name: "Contact", navto: "/contact" },
  ];

  return {menu}
});
