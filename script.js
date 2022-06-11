"use strict";

const buttons = document.querySelectorAll(".accordion button");

const expandContent = function () {
  const buttonStatus = this.getAttribute("aria-expanded");

  buttonStatus === "false"
    ? this.setAttribute("aria-expanded", true)
    : this.setAttribute("aria-expanded", false);
};

buttons.forEach((button) => button.addEventListener("click", expandContent));
