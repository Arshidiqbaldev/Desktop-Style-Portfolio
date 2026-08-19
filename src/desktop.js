document.addEventListener("DOMContentLoaded", function () {

  const mainDiv = document.querySelectorAll(".main");
  const windowTab = document.querySelector(".window-tab");
  const closeBtn = document.querySelector(".close-btn");
  const maxBtn = document.querySelector(".max-btn");
  const minBtn = document.querySelector(".min-btn");
  


  mainDiv.forEach((main) => {


    const navBar = document.createElement("nav");

    navBar.className = "nav-bar w-auto flex items-center gap-2 transition rounded-3xl border border-gray-400/20 justify-center  p-2 bg-base-200/50 inset-shadow-xs inset-shadow-gray-500/30 absolute z-100 squircle -bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2"

    navBar.innerHTML =
      `

        <a href="index.html" class="tooltip bg-orange-500  rounded-2xl flex items-center justify-center group transition p-2"
        data-tip="Home">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-5 md:size-8 text-base-content group-hover:size-7 group-hover:md:size-10 transition "
          viewBox="0 0 24 24"><!-- Icon from ProIcons by ProCode - https://github.com/ProCode-Software/proicons/blob/main/LICENSE -->
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M20.71 18.65v-7.622a3 3 0 0 0-1.151-2.362l-6.326-4.951a2 2 0 0 0-2.466 0l-6.326 4.95a3 3 0 0 0-1.15 2.363v7.622c0 1.16.94 2.1 2.1 2.1h3.97v-7.965h5.278v7.965h3.97a2.1 2.1 0 0 0 2.1-2.1" />
        </svg>

      </a>


      <a href="about.html" class="tooltip bg-purple-500  rounded-2xl  flex items-center justify-center group transition p-2"
        data-tip="About">

        <svg xmlns="http://www.w3.org/2000/svg" class="size-5 md:size-8 text-base-content group-hover:size-7 group-hover:md:size-10 transition "
          viewBox="0 0 24 24"><!-- Icon from ProIcons by ProCode - https://github.com/ProCode-Software/proicons/blob/main/LICENSE -->
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <circle cx="12" cy="8.196" r="4.446" />
            <path d="M19.608 20.25a7.608 7.608 0 0 0-15.216 0" />
          </g>
        </svg>

      </a>


      <a href="index.html" class="tooltip bg-red-500  rounded-2xl flex items-center justify-center group transition p-2"
        data-tip="Projects">

        <svg xmlns="http://www.w3.org/2000/svg" class="size-5 md:size-8 text-base-content group-hover:size-7 group-hover:md:size-10 transition "
          viewBox="0 0 24 24"><!-- Icon from ProIcons by ProCode - https://github.com/ProCode-Software/proicons/blob/main/LICENSE -->
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5">
            <path stroke-linejoin="round"
              d="M11.688 3.063a3.5 3.5 0 0 1 1.027.712l5.968 5.97c.3.3.54.647.711 1.026m-7.706-7.708a3.5 3.5 0 0 0-1.448-.313H7.792a3.5 3.5 0 0 0-3.5 3.5v11.5a3.5 3.5 0 0 0 3.5 3.5h8.416a3.5 3.5 0 0 0 3.5-3.5v-5.53c0-.505-.109-.999-.314-1.45m-7.706-7.707V8.77a2 2 0 0 0 2 2h5.706" />
            <path d="M7.29 13.77h9.42m-9.42 3.48h6.42" />
          </g>
        </svg>

      </a>


      <a href="index.html" class="tooltip bg-blue-500  rounded-2xl  flex items-center justify-center group transition p-2"
        data-tip="Mail">

        <svg xmlns="http://www.w3.org/2000/svg" class="size-5 md:size-8 text-base-content group-hover:size-7 group-hover:md:size-10 transition "
          viewBox="0 0 24 24"><!-- Icon from ProIcons by ProCode - https://github.com/ProCode-Software/proicons/blob/main/LICENSE -->
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <rect width="18.5" height="15.5" x="2.75" y="4.25" rx="3" />
            <path d="m2.75 8l8.415 3.866a2 2 0 0 0 1.67 0L21.25 8" />
          </g>
        </svg>

      </a>


        `;



    main.insertAdjacentElement("beforeend", navBar)
  })





  closeBtn.addEventListener("click", () => {
    windowTab.classList.toggle("flex")
    windowTab.classList.toggle("hidden")
  })

  maxBtn.addEventListener("click", () => {

    windowTab.classList.toggle("md:scale-70");
    windowTab.classList.toggle("scale-90");


  });

  minBtn.addEventListener("click", () => {

    windowTab.classList.remove("md:scale-70");
    windowTab.classList.remove("scale-90");

    windowTab.classList.toggle("scale-0")


  });











})



