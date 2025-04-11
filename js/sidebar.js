// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector(".sidebar__links-button");
//   const list = document.querySelector(".sidebar__links-list");

//   button.addEventListener("click", function () {
//     const isActive = list.classList.contains("active");
//     list.classList.toggle("active", !isActive);
//     button.classList.toggle("active", !isActive);
//   });
// });

// // page-nav

// document.addEventListener("DOMContentLoaded", function () {
//   const button = document.querySelector(".page-nav-button");
//   const list = document.querySelector(".page-nav-list");

//   button.addEventListener("click", function () {
//     const isActive = list.classList.contains("active");
//     list.classList.toggle("active", !isActive);
//     button.classList.toggle("active", !isActive);
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // sidebar
  const button1 = document.querySelector(".sidebar__links-button");
  const list1 = document.querySelector(".sidebar__links-list");

  if (button1 && list1) {
    console.log("Button 1 and List 1 found");
    list1.style.overflow = "hidden";
    list1.style.maxHeight = "0";
    list1.style.transition = "max-height 0.5s ease";

    button1.addEventListener("click", function () {
      const isActive = list1.classList.contains("active");
      console.log("List 1 active:", isActive);

      if (isActive) {
        list1.style.maxHeight = "0";
      } else {
        list1.style.maxHeight = `${list1.scrollHeight}px`;
      }

      list1.classList.toggle("active", !isActive);
      button1.classList.toggle("active", !isActive);
    });
  } else {
    console.log("Button 1 or List 1 not found");
  }

  // page-nav
  const button2 = document.querySelector(".page-nav-button");
  const list2 = document.querySelector(".page-nav-list");

  if (button2 && list2) {
    console.log("Button 2 and List 2 found");
    list2.style.overflow = "hidden";
    list2.style.maxHeight = "0";
    list2.style.transition = "max-height 0.5s ease";

    button2.addEventListener("click", function () {
      const isActive = list2.classList.contains("active");
      console.log("List 2 active:", isActive);

      if (isActive) {
        list2.style.maxHeight = "0";
      } else {
        list2.style.maxHeight = `${list2.scrollHeight}px`;
      }

      list2.classList.toggle("active", !isActive);
      button2.classList.toggle("active", !isActive);
    });
  } else {
    console.log("Button 2 or List 2 not found");
  }
});
