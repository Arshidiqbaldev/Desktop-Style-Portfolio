document.addEventListener("DOMContentLoaded", function () {

    const windowTab = document.querySelector(".window-tab");
    const closeBtn = document.querySelector(".close-btn");
    const maxBtn = document.querySelector(".max-btn");
    const minBtn = document.querySelector(".min-btn");








    closeBtn.addEventListener("click", () => {
        windowTab.classList.toggle("flex")
        windowTab.classList.toggle("hidden")
    })

    maxBtn.addEventListener("click", () => {
        windowTab.classList.toggle("w-full");
        windowTab.classList.toggle("md:w-2/3");
        windowTab.classList.toggle("w-9/10");
        windowTab.classList.toggle("min-h-full")
        windowTab.classList.toggle("min-h-2/3");

    });

    minBtn.addEventListener("click", () => {
        windowTab.classList.toggle("flex")
        windowTab.classList.toggle("hidden")


    });



})