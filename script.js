"use strict";

const buttons = document.querySelectorAll(".accordion button");

const expandContent = function () {
  const buttonStatus = this.getAttribute("aria-expanded");

  for (let button of buttons) {
    button.setAttribute("aria-expanded", false);
  }

  if (buttonStatus === "false") this.setAttribute("aria-expanded", true);
};

buttons.forEach((button) => button.addEventListener("click", expandContent));
