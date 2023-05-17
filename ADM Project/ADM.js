let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementById("slideshow").getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}
