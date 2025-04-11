document.addEventListener("DOMContentLoaded", function () {
    const langButton = document.querySelector(".header__flag-wrap");
    const popAp = document.getElementById("langPopAp");
    const closeButton = document.querySelector(".pop-ap__language-close");
    const overlay = document.querySelector(".pop-ap__language-overlay");
  
    console.log("langButton:", langButton);
    console.log("popAp:", popAp);
  
    langButton.addEventListener("click", function (event) {
      event.stopPropagation();
      console.log("Language button clicked");
      popAp.classList.add("active");
    });
  
    closeButton.addEventListener("click", function () {
      popAp.classList.remove("active");
    });
  
    overlay.addEventListener("click", function () {
      popAp.classList.remove("active");
    });
  
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        popAp.classList.remove("active");
      }
    });
  });
  
