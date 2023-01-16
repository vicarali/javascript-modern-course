import "../css/sakura.css";
import "../css/custom.css";

import { initCommon, initCategoryFilter } from "./modules/filters";
import { initForms, initUserForm } from "./modules/forms";

/**
 * Init functions
 */
window.addEventListener("DOMContentLoaded", () => {
  initCommon();

  if (document.getElementById("category")) {
    initCategoryFilter();
  }
  if (document.querySelector("form")) {
    initForms();
  }
  if (document.getElementById("user_form")) {
    initUserForm();
  }
});
