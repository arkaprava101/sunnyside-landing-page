"use strict";

import icons from "/images/symbol-defs.svg";
import "core-js/stable";

const mobileIcon = document.querySelector(".mobile-menu-icon");
const navContainer = document.querySelector(".nav__links");
const firstFeatureContainer = document.querySelector(".features--1");
const navigateDownIcon = document.querySelector(".arrow-down__icon");

mobileIcon.addEventListener("click", function () {
  navContainer.classList.toggle("show-menu");
  if (navContainer.classList.contains("show-menu")) {
    this.innerHTML = ` <use xlink:href="${icons}#icon-clear"></use>`;
  } else {
    this.innerHTML = ` <use xlink:href="${icons}#icon-menu"></use>`;
  }
});

navigateDownIcon.addEventListener("click", function () {
  firstFeatureContainer.scrollIntoView({ behavior: "smooth" });
});
