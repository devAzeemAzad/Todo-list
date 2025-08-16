// function initThemeManager() {
//     function setThemeBasedOnPreference() {
//         if (!window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             document.body.classList.remove("dark");
//             document.body.classList.add("light");
//             localStorage.setItem("theme","light");
//         } else {
//             document.body.classList.remove("light");
//             document.body.classList.add("dark");
//             localStorage.setItem("theme","dark");
//         }
//     }
    
//     // Initialize theme
//     if (localStorage.getItem("theme")) {
//         document.body.classList.add(`${localStorage.getItem("theme")}`);
//     } else {
//         setThemeBasedOnPreference();
//     }
    
//     // Set up event listeners
//     const btn = document.querySelector("#toggleBtn");
    
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
//         if (!localStorage.getItem("theme")) {
//             setThemeBasedOnPreference();
//         }
//     });
    
//     btn?.addEventListener("click", function () {
//         if (document.body.classList.contains("dark")) {
//             document.body.classList.remove("dark");
//             document.body.classList.add("light");
//             localStorage.setItem("theme","light");
//         } else {
//             document.body.classList.remove("light");
//             document.body.classList.add("dark");
//             localStorage.setItem("theme","dark");
//         }
//     });
    
//     console.log(window.matchMedia('(prefers-color-scheme: dark)'));
// }

// // Call the function to initialize
// initThemeManager();

// function initLoader() {
//     const load = document.querySelector(".load");
//     let count = 0;
//     const interval = setInterval(() => {
//         if (count < 100.1) {
//             load.style.width = `${count}%`;
//             count++;
//             document.querySelector("h1").textContent = `downloading ${count}%`;
//         } else {
//             document.querySelector("h1").textContent = "downloaded";
//             clearInterval(interval);
//         }
//     }, 50);
// }
// initLoader();
const file = document.querySelector("#file");
const upload = document.querySelector("#upload");
upload.addEventListener("click",function () {
    file.click();
})

file.addEventListener("change",function (details) {
    upload.textContent=details.target.files[0].name;
})







