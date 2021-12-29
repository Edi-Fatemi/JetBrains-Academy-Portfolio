const openWindowBtn = document.querySelectorAll("[data-target]");
const closeWindowBtn = document.querySelectorAll(".close-window");
const modalOverlay = document.querySelector(".modal-overlay");
const toggleMenu = document.querySelector(".toggle-menu")
openWindowBtn.forEach((btn )=> {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.add("active");
        modalOverlay.classList.add("active");
    })
});

closeWindowBtn.forEach((btn )=> {
    btn.addEventListener("click", () => {
        btn.closest(".window").classList.remove("active");
        modalOverlay.classList.remove("active");
    })
});

window.onclick = (e) => {
    if(e.target === modalOverlay) {
        const modalWindow = document.querySelectorAll(".window");
        modalWindow.forEach(modal => modal.classList.remove("active"));
        modalOverlay.classList.remove("active");
    }
}


toggleMenu.addEventListener("click", () => {
    const hamburgerMenu = document.querySelector(".hamburger");
    hamburgerMenu.classList.toggle("active");
    toggleMenu.classList.toggle("active");
});


window.addEventListener("resize", () => {
    const hamburgerMenu = document.querySelector(".hamburger");
    if(window.innerWidth >= 868) {
        hamburgerMenu.classList.remove("active");
        toggleMenu.classList.remove("active");
    }
})

