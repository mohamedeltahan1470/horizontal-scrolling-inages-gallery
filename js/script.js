const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

backBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
});
