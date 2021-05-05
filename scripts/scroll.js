function scrollToAnchor() {
    var elementPos = document.querySelector('.content-start').getBoundingClientRect().top;
    var offset = 120;
    var offsetPosition = elementPos - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}