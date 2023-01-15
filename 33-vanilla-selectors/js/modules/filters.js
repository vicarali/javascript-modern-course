import { iterateNodes } from "./utils";

function initCommon() {
  /**
   * Show/hide an element based on a change in another field.
   */
  var trigger = document.querySelector(".js-trigger-container");

  trigger.addEventListener("click", function () {
    document
      .getElementById(trigger.getAttribute("rel"))
      .classList.toggle("hidden");
  });
}

/*******************************************************************************************************************
 * Filter courses by category
 ******************************************************************************************************************/
function initCategoryFilter() {
  var filter = document.getElementById("category");

  filter.addEventListener("change", function () {
    var category = this.value;

    var elementsToFilter = document.querySelectorAll(".js-filtered-item");

    iterateNodes(elementsToFilter, function (element) {
      if (category && category !== element.getAttribute("data-category")) {
        element.classList.add("hidden");
      } else {
        element.classList.remove("hidden");
      }
    });
  });
}

export { initCommon, initCategoryFilter };
