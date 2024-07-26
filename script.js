const menuBtn = document.querySelector("#menu");
const menuCancelBtn = document.querySelector("#close");
const navBar = document.querySelector("nav");


menuBtn.addEventListener("click",()=>{
    navBar.classList.remove("hidden");
})

menuCancelBtn.addEventListener("click",()=>{
    navBar.classList.add("hidden");
})